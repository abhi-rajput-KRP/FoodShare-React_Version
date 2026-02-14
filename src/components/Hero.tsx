import preview from '../assets/Hero_Section_img.jpg';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    const features = [
        "✨ Share a meal, spread hope.",
        "🚀 Connect Donors with NGOs.",
        "🔒 Together, We fight hunger.",
        "📊 Here generosity meets impact.",
    ];

    return (
        <section className="relative w-full h-screen bg-gradient-to-br from-black via-zinc-900 to-blue-900/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Food is the blessing of god ... let's not waste it.
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Introducing
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                                Food
                            </span>
                            Share
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            FoodShare connects the donors wo have access of left food to the NGOs that can provide that food to the one who need it the most.
                            Together, We all fight against Hunger in Society.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-gray-300"
                                >
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link to="/donor_register" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                                I have Food
                            </Link>
                            <Link to="ngo_register" className="px-8 py-4 border border-zinc-700 text-gray-300 hover:bg-zinc-800 font-semibold rounded-lg transition-colors duration-200">
                                I am NGO
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                            <div className="relative bg-zinc-900 rounded-2xl shadow-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    width={600}
                                    height={400}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-zinc-800 rounded-lg shadow-lg p-4 border border-zinc-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <span className="text-green-400 text-lg">
                                        ✨
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        We create Impact
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Let's help the needies
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-zinc-800 rounded-lg shadow-lg p-4 border border-zinc-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-400 text-lg">
                                        👥
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Donation to humanity
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Feeding with love
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
