import { useRef, useState, useEffect } from "react";
import { createPortal } from 'react-dom'
import CustomOverlayView from "../CustomOverlayView/CustomOverlayView";

interface OverlayViewProps {
    map: google.maps.Map;
    position: google.maps.LatLng;
    children: any;
    selector: string

}
function OverlayViewContainer(props: OverlayViewProps) {
    const ref = useRef()
    const [mounted, setMounted] = useState(false);
    const { map, selector, children, position } = props;

    useEffect(() => {
        ref.current = document.querySelector(selector)
        setMounted(true)
    }, [selector])

    let overlay = null;
    let el = null;

    if (map && position) {

        el = el || document.createElement('div');

        overlay = overlay ||
            new CustomOverlayView({
                position,
                content: el
            });
        overlay.setMap(map);


        return mounted ? createPortal(children, el) : null;

    }
    return null
}


export default OverlayViewContainer