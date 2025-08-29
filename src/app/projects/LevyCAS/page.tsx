import "./styles.css";

function SimplificationMenu() {
    return (
        <div>
            <button>Automatic Simplification</button>
            <button>Rationalization</button>
            <button>Trigonometric Simplification</button>
        </div>
    )
}

function CalculusMenu() {
    return (
        <div>
            <button>Differentiation</button>
            <button>Integration</button>
        </div>
    )
}

function PolynomialMenu() {
    return (
        <div>
            <button>Greatest Common Divisor</button>
            <button>Square-Free Factorization</button>
        </div>
    )
}

function NumericalMenu() {
    return (
        <div>
            <button>Prime Check</button>
            <button>Integer Factor</button>
        </div>
    )
}

export default function LevyCAS() {
    return (
        <section id="cas-demo" className="min-h-screen">
            {/* Output */}
            <div>

            </div>

            {/* Operations*/}
            <form id="cas-gui">
                {/* Operations menu */}
                <div id="cas-op-menu">
                    {/* Operation class menu */}
                    <div>
                        <button>Simplification</button>
                        <button>Calculus</button>
                        <button>Polynomial</button>
                        <button>Numerical</button>
                    </div>

                    {/* Operation type menu */}
                    <div>
                        {/* Rendering of menus depends on operation class selection - Calculus for now */}
                        <CalculusMenu />
                    </div>
                </div>

                {/* Input */}
                <div>

                </div>
                
            </form>
        </section>
    )
}