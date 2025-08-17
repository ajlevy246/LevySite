import Image from 'next/image';
import Link from 'next/link';

function LevyCAS() {
  return (
    <li className="flex justify-center items-center space-x-[15%]">
      <div className="w-[20%]">
        <div className="sectionTitle text-3xl text-center mb-4"> LevyCAS</div>
        <hr className="border-blue-800 mb-2" />
        <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
          complete with a Pratt Parser for parsing natural language into mathematical expressions. 
          Comes equipped with operations from calculus and number theory, including symbolic integration and 
          prime factorization.
        </div>
      </div>
      <Link
        className="max-w-[600px] max-h-[200px]"
        href="https://huggingface.co/spaces/ajlevy246/levycas-app"
        target="_blank"
      >
        <Image
          className="glow glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
    </li>
  )
}

function EarleyParser() {
  return (
    <li className="flex justify-center items-center space-x-[15%]">
      <Link
        className="max-w-[600px] max-h-[200px]"
        href="https://huggingface.co/spaces/ajlevy246/levycas-app"
        target="_blank"
      >
        <Image
          className="glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
      <div className="w-[20%]">
        <div className="sectionTitle text-3xl text-center mb-4"> Earley Parser Generator</div>
        <hr className="border-blue-800 mb-2" />
        <div className="text-md md:text-2xl text-gray-400">A python package capable of parsing arbitrary user defined context-free grammars.
          Uses a top-down Earley Parser written in pure python—returns ambiguous parse forests, with methods to extract and modify trees.
        </div>
      </div>
    </li>
  )
}

function PersonalSite() {
  return (
    <li className="flex justify-center items-center space-x-[15%]">
      <div className="w-[20%]">
        <div className="sectionTitle text-3xl text-center mb-4"> LevyCAS</div>
        <hr className="border-blue-800 mb-2" />
        <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
          complete with a Pratt Parser for parsing natural language into mathematical expressions. 
          Comes equipped with operations from calculus and number theory, including symbolic integration and 
          prime factorization.
        </div>
      </div>
      <Link
        className="max-w-[600px] max-h-[200px]"
        href="https://huggingface.co/spaces/ajlevy246/levycas-app"
        target="_blank"
      >
        <Image
          className="glow glowOnHover h-auto w-auto border-collapse border-[5px] rounded-lg border-solid border-black"
          src="/levycasdemo.jpg"
          alt="Screenshot from the LevyCAS demo" 
          width="1875"
          height="575"
        />
      </Link>
    </li>
  )
}

export default function Projects() {
  function Separator() {
    return (
      <li><hr className="w-[300px] max-w-[300px] justify-self-center border-blue-800"/></li>
    )
  }

  return (
    // <section id="projects" className="pt-[10%]">
    <section id="projects" className="pt-[25%] md:pt-[8%]">
      <div className="sectionTitle text-5xl text-center mb-[5%]"> Projects </div>
      <ul className="space-y-20">
        <LevyCAS />
        <Separator />
        <EarleyParser />
        <Separator />
        <PersonalSite />
      </ul>
    </section>
  )
}