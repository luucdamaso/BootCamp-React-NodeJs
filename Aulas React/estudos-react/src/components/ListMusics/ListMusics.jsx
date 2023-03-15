import ImageMusic1 from "../../assets/images/1.png";
import ImageMusic2 from "../../assets/images/2.png";
import ImageMusic3 from "../../assets/images/3.png";
import { Music } from "../Music/Music";


export function ListMusics() {
    return (
        // Fragment
        <>
            <Music image={ImageMusic1} title="5GB" author="React feat. Module"></Music>

            <Music image={ImageMusic2} title="Oi React" author="Ze HTML e Ze CSS"></Music>

            <Music image={ImageMusic3} title="LetiCSSia" author="Almir feat. Gabriel"></Music>
        </>
    )
}