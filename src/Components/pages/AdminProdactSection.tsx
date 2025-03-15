function AdminMakeDashBordPost() {
    return (
        <section className="w-full h-fit bg-blue-700 flex flex-col">
            {/* Fixed Header */}
            <div className=" w-full bg-white h-20 border-2 border-solid flex items-center justify-end fixed top-0  z-10">
                <h1 className="text-5xl text-red-800 font-bold pl-20">Admin</h1>
            </div>

            {/* Scrollable Content */}
            <div className="w-full overflow-y-auto  pt-20">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                        <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AdminMakeDashBordPost;
