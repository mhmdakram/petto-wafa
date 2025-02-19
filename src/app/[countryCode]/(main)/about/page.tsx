import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="flex flex-row-reverse justify-center items-center w-[80%] gap-16 h-auto mx-auto min-h-screen">
                <h1 className="text-[128px] font-normal">Petto</h1>
                <Image
                    src="/about-image.png"
                    alt="Puppy pic"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </>
    );
}