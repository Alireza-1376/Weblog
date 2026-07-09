import Image from "next/image";

function Banner() {
    return (
        <section className="relative h-75 mt-20 md:h-112.5">
            <Image
                src="/images/3.avif"
                alt="Blog Banner"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    وبلاگ آموزشی من
                </h1>

                <p className="max-w-2xl text-sm md:text-lg">
                    آموزش برنامه نویسی و هوش مصنوعی
                </p>
            </div>
        </section>
    )
}

export default Banner;