export default function Honors() {
    return (
        <section id="honors" className="pt-[25%] md:pt-[8%] text-center">
            {/* Section Title */}
            <h2 className="sectionTitle text-5xl ">
                Honors and Awards
            </h2>

            {/* Honors List */}
            <div><b>The Clifford Beck Award</b> - Montgomery College, 2023</div>
            <div><b>Eagle Scout</b> - Troop 457, Rockville, MD, 2023</div>
            <div><b>AP Scholar with Distinction</b> - College Board, 2021</div>
            <div className="space-y-4 max-w-xl mx-auto text-gray-300 text-lg leading-relaxed">
                <div className="hover:text-white transition-colors duration-300">
                    <span className="font-bold">The Clifford Beck Award</span> - Montgomery College, 2023
                </div>
                <div className="hover:text-white transition-colors duration-300">
                    <span className="font-bold">Eagle Scout</span> - Troop 457 Rockville, MD, 2023
                </div>
                <div className="hover:text-white transition-colors duration-300">
                    <span className="font-bold">AP Scholar with Distinction</span>, College Board, 2021
                </div>
            </div>
        </section>
    )
}
