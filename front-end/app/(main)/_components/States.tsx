import { FaAward, FaEye, FaNewspaper, FaUsers } from "react-icons/fa";

const stats = [
    {
        icon: <FaUsers />,
        value: "10K+",
        title: "کاربر فعال",
    },
    {
        icon: <FaNewspaper />,
        value: "500+",
        title: "مقاله منتشر شده",
    },
    {
        icon: <FaEye/>,
        value: "1M+",
        title: "بازدید ماهانه",
    },
    {
        icon: <FaAward />,
        value: "50+",
        title: "دوره آموزشی",
    },
];

function States() {
    return (
        <section className="bg-teal-700 dark:bg-slate-600 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="text-center text-white"
                        >
                            <div className="md:text-3xl text-2xl flex justify-center mb-4">
                                {item.icon}
                            </div>

                            <h3 className="md:text-3xl text-2xl font-bold mb-2">
                                {item.value}
                            </h3>

                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default States;