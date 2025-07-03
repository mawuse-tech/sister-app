import React from 'react';

const SignupStructure = ({ titleone, titletwo, desription, children }) => {
    return (
        <section className="flex flex-col lg:flex-row w-full bg-[#DFEBFB] lg:h-[125vh] h-[100vh] items-start lg:items-center gap-6 md:gap-10 lg:gap-36">

            {/* Sidebar */}
            <div className="bg-[#5651AB] w-full h-[30vh] lg:w-1/4 lg:h-[125vh] lg:fixed flex items-center justify-center text-white p-4 ">
                <div className="text-center">
                    <h3 className="text-4xl font-bold mb-6">
                        {titleone}
                    </h3>
                    <h2 className="text-4xl font-medium mb-6">
                        {titletwo}
                    </h2>
                    <p>
                        {desription}
                    </p>
                </div>
            </div>

            {/* Form Box */}
            <div className="bg-white rounded-3xl w-full lg:w-[40rem] p-6 md:p-10 shadow-md lg:ml-[30rem]">
                {children}
            </div>

        </section>
    );
};

export default SignupStructure;
