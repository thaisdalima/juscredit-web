import { useEffect, createContext, useState, ChangeEvent, Fragment } from "react"
import { mapStyleOptions, mapDefaultOptions } from "./options"
import './InteractiveMap.scss'

import dynamic from 'next/dynamic'
import PartnerPopup from "./PartnerPopup/PartnerPopup"
import StateDetails from "./StateDetails/StateDetails"
import PartnerAutoSuggest from "./PartnerAutosuggest/PartnerAutoSuggest"
import MarkerClusterer from '@google/markerclustererplus'

const OverlayViewContainer = dynamic(
    () => import('./OverlayViewContainer/OverlayViewContainer'),
    { ssr: false }
)

const InteractiveMap = ({ data, onFilterChange }: { data: any[], onFilterChange: any }) => {

    let map: google.maps.Map<HTMLElement>
    const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
    const [mapRef, setMapRef] = useState<google.maps.Map<HTMLElement>>(null)
    const [showingPartner, setShowingPartner] = useState(null)
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState(null)
    const [entityType, setEntityType] = useState(null)
    const [productionScope, setProductionScope] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [selectedState, setSelectedState] = useState(null)
    const [features, setFeatures] = useState(null)
    const [selectedPartner, setSelectedPartner] = useState(null)
    const [clusters, setClusters] = useState([])

    useEffect(() => {

        initMap()

    }, [])
    useEffect(() => {
        if (selectedPartner) {
            const instancedMap = map ? map : mapRef
            const marker = markers.find((marker) => {
                return marker.getTitle() === selectedPartner.fantasyName
            })
            if (marker) {
                instancedMap.setZoom(13);
                instancedMap.setCenter(marker.getPosition())
            }
        }
    }, [selectedPartner])

    useEffect(() => {
        if (data) {
            generateMarkers(data)
        }
    }, [data])
    const selectPartner = (partner) => {
        setSelectedPartner(partner)

    }

    const clearMarkers = () => {
        clusters.forEach((cluster: MarkerClusterer) => {
            const clusterMarkers = cluster.getMarkers();
            cluster.removeMarkers(clusterMarkers)
            clusterMarkers.forEach(m => m.setMap(undefined))


        })
        setClusters([])

        markers.forEach((marker) => marker.setMap(undefined))
        setMarkers([])

    }
    const generateMarkers = (data: any[]) => {
        clearMarkers();
        let newMarkers = {}
        let allMarkers = []
        data.forEach((partner) => {
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(partner.latitude, partner.longitude),
                icon: `markers/${String(partner.entityType).toLowerCase() + (partner.certified ? '-certified' : '')}.svg`,
                map,
                clickable: true,
                title: partner.fantasyName
            })
            marker.addListener('click', () => {

                selectPartner(partner)
                setShowingPartner(partner)
            })
            marker.addListener('mouseover', () => {
                setCurrentMarkerPosition(marker.getPosition())
                setShowingPartner(partner)
            })

            marker.setMap(loaded ? mapRef : map);

            if (!newMarkers[partner.entityType]) {
                newMarkers[partner.entityType] = []
            }
            newMarkers[partner.entityType].push(marker)

            allMarkers.push(marker)
        })
        let allClusters = []
        Object.keys(newMarkers).forEach((entityType) => {
            allClusters.push(new MarkerClusterer(loaded ? mapRef : map, newMarkers[entityType], {
                imagePath: `/clusterers/${entityType.toLowerCase()}`, styles: [
                    {
                        height: 50,
                        width: 50,
                        url: `/clusterers/${entityType.toLowerCase()}1.png`,
                        textColor: 'white',
                        fontWeight: 'bold',
                        anchorText: [19, 1]
                    },
                    {
                        height: 50,
                        width: 50,
                        url: `/clusterers/${entityType.toLowerCase()}2.png`,
                        textColor: 'white',
                        fontWeight: 'bold',
                        anchorText: [19, 1]
                    },
                    {
                        height: 50,
                        width: 50,
                        url: `/clusterers/${entityType.toLowerCase()}3.png`,
                        textColor: 'white',
                        fontWeight: 'bold',
                        anchorText: [19, 1]
                    },
                    {
                        height: 78,
                        width: 77,
                        url: `/clusterers/${entityType.toLowerCase()}4.png`,
                        textColor: 'white',
                        fontWeight: 'bold',
                        anchorText: [19, 1]
                    },
                    {
                        height: 90,
                        width: 89,
                        url: `/clusterers/${entityType.toLowerCase()}5.png`,
                        textColor: 'white',
                        fontWeight: 'bold',
                        anchorText: [19, 1]
                    }
                ]
            }))
        })
        setClusters(allClusters)
        setLoaded(true)
        setMarkers(allMarkers)
    }
    const initMap = () => {

        const mapType = new google.maps.StyledMapType(
            mapStyleOptions,
            { name: "Organis8" }
        )
        map = new google.maps.Map(
            document.getElementById('mapCanvas'),
            mapDefaultOptions(new google.maps.LatLng(-13.7017905, -59.6996757))
        )
        setMapRef(map)
        map.mapTypes.set('organisMap', mapType)
        map.setMapTypeId('organisMap')

    }
    const selectState = async (e: ChangeEvent<HTMLSelectElement>) => {
        const state = e.target.value
        setSelectedState(state)
        const map = mapRef
        const geoJson = await fetch(`/geoJSON/${state.toLowerCase()}.json`);
        setFeatures(map.data.addGeoJson(await geoJson.json()));
        map.data.setStyle({ fillColor: 'transparent  ', strokeColor: '#6CB648', strokeWeight: 2 });
        map.setCenter(new google.maps.LatLng(-22.9549806, -51.0232348));
        map.setZoom(7)
    }


    const handleEntityType = (e: any) => {
        const filter = e.target.value === entityType ? null : e.target.value;

        setEntityType(filter)
        onFilterChange({ entityType: filter, productionScope })
    }
    const handleProductionScope = (e: any) => {
        const filter = e.target.value === productionScope ? null : e.target.value;

        setProductionScope(filter)
        onFilterChange({ productionScope: filter, entityType })
    }
    const handleGoBack = () => {
        const instancedMap = map ? map : mapRef
        setSelectedState(null)
        instancedMap.data.remove(features[0]);
        instancedMap.setZoom(5);
        instancedMap.setCenter(new google.maps.LatLng(-13.7017905, -59.6996757))
    }

    const handlePopupRef = (ref) => {
        if (ref) {
            (google.maps.OverlayView as any).preventMapHitsAndGesturesFrom(ref)
        }
    }

    const handlePopupMouseLeave = () => {
        setShowingPartner(null)
    }


    return (
        <div className="interactive-map-container">
            <div className="find-partners-card">
                {selectedState ? <StateDetails stateDetail={selectState} onGoBack={handleGoBack} />
                    : <Fragment>
                        <PartnerAutoSuggest partners={data} onSelect={selectPartner} />
                        <h2>Filtrar resultados por:</h2>
                        <div>

                            <div style={{ flexDirection: 'column', display: 'flex' }}>
                                <select className="state-select" onChange={selectState}>
                                    <option>Selecionar estado</option>
                                    <option value="SP">São Paulo</option>
                                </select>
                            </div>
                            <div style={{ flexDirection: 'column', display: 'flex' }}>
                                <strong>Tipo de entidade</strong>
                                <div className="radio ocs">
                                    <input
                                        type="radio"
                                        onClick={handleEntityType}
                                        checked={entityType === "OCS"}
                                        value="OCS"
                                    />
                                    <label>OCS</label>
                                    <img src="/ocs.svg" />
                                </div>
                                <div className="radio opac" >
                                    <input
                                        type="radio"
                                        onClick={handleEntityType}
                                        checked={entityType === "CERT"}
                                        value="CERT"
                                    />
                                    <label>CERT</label>
                                    <img src="/cert.svg" />
                                </div>
                                <div className="radio cert">
                                    <input
                                        type="radio"
                                        onClick={handleEntityType}
                                        checked={entityType === "OPACS"}
                                        value="OPACS"
                                    />
                                    <label>OPACS</label>
                                    <img src="/opacs.svg" />
                                </div>

                            </div>

                            <div style={{ flexDirection: 'column', display: 'flex', marginTop: 16 }}>
                                <strong>Escopo de produção</strong>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={handleProductionScope}
                                        checked={productionScope === "EXT"}
                                        value="EXT"
                                    />
                                    <label><strong>EXT</strong> - Extrativismo</label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={handleProductionScope}
                                        checked={productionScope === "PPA"}
                                        value="PPA"
                                    />
                                    <label><strong>PPA</strong> - Produção primária animal</label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={handleProductionScope}
                                        checked={productionScope === "PPV"}
                                        value="PPV"
                                    />
                                    <label><strong>PPV</strong> - Produção primária vegetal</label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={handleProductionScope}
                                        checked={productionScope === "POA"}
                                        value="POA"
                                    />
                                    <label><strong>POA</strong> - Processamento animal</label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={handleProductionScope}
                                        checked={productionScope === "POV"}
                                        value="POV"
                                    />
                                    <label><strong>POV</strong> - Processamento vegetal</label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        onClick={handleProductionScope}
                                        checked={productionScope === "PIA"}
                                        value="PIA"
                                    />
                                    <label><strong>PIA</strong> - Insumos agrícolas</label>
                                </div>


                            </div>
                        </div>
                    </Fragment>
                }
            </div>
            <div id="mapCanvas" style={{ height: '749px' }}>

                {mapRef && (
                    <OverlayViewContainer map={mapRef} selector="#overlay" position={currentMarkerPosition} >
                        {showingPartner && <PartnerPopup setRef={handlePopupRef} onMouseLeave={handlePopupMouseLeave} partner={showingPartner} />}
                    </OverlayViewContainer>
                )

                }

            </div>
        </div >)

}
export default InteractiveMap