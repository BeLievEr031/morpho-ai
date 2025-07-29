
const MailingListForm = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-16 mt-18">
            {/* Left Side - Text */}
            <div>
                <h2 className="text-[64px] font-medium text-[#ff661f] mb-4">Mailing List</h2>
                <p className="text-black text-lg">
                    Fill this out to stay subscribed to our updates. For any other collaborations,
                    please reach out to us at{" "}
                    <a href="mailto:ayna@morphoai.tech" className="text-blue-600 underline">
                        ayna@morphoai.tech
                    </a>
                </p>
            </div>

            {/* Right Side - Form */}
            <form className="space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-black font-medium">
                        Name <span className="text-gray-500 text-sm">(required)</span>
                    </label>
                    <div className="flex gap-4 mt-1">
                        <div className="flex-1">
                            <label className="block text-sm">First Name</label>
                            <input
                                type="text"
                                className="w-full bg-[#f1ede7] p-2 rounded"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm">Last Name</label>
                            <input
                                type="text"
                                className="w-full bg-[#f1ede7] p-2 rounded"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-black font-medium">
                        Email <span className="text-gray-500 text-sm">(required)</span>
                    </label>
                    <input
                        type="email"
                        className="w-full bg-[#f1ede7] p-2 rounded mt-1"
                        required
                    />
                </div>

                {/* Company */}
                <div>
                    <label className="block text-black font-medium">
                        Company <span className="text-gray-500 text-sm">(required)</span>
                    </label>
                    <textarea
                        rows={3}
                        className="w-full bg-[#f1ede7] p-2 rounded mt-1"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold tracking-wide hover:bg-blue-800"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default MailingListForm;
