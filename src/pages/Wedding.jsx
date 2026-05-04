
import WeddingHero from "../components/wedding/WeddingHero";
import WeddingClosing from "../components/wedding/WeddingClosing";
import WeddingProducts from "../components/wedding/WeddingProducts";

export default function Wedding() {
    return (
        <div>
            <WeddingHero />
           <WeddingProducts/>
            <WeddingClosing />
        </div>
    );
}