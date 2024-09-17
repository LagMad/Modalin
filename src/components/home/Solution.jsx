import React from "react";
import SVGs from "../layout/shared/SVGs";
import imgSolution1 from "../../assets/solution1.jpg";

const Solution = () => {
    return (
        <div className="flex flex-col w-full gap-8">
            <div className="text-cust-dark-blue text-5xl flex flex-row items-center gap-5">
                Mengapa memilih
                <SVGs.LogoText width={172} height={64} />
            </div>
            <div className="flex flex-row gap-8 w-full">
                <div
                    className="flex flex-col items-center leading-tight text-4xl px-8 py-4 text-left rounded-2xl text-cust-white font-semibold bg-cover bg-center bg-no-repeat h-80 w-1/3"
                    style={{
                        backgroundImage: `url("/src/assets/solution1.jpg")`,
                    }}
                >
                    <div className="flex items-center justify-end w-full">
                        <SVGs.Eye width={92} />
                    </div>
                    Buat ide Anda dikenal dengan video pitching yang memikat!
                </div>
                <div
                    className="flex flex-col items-center leading-tight text-4xl px-8 py-4 text-left rounded-2xl text-cust-white font-semibold bg-cover bg-center bg-no-repeat h-80 w-1/3"
                    style={{
                        backgroundImage: `url("/src/assets/solution2.jpg")`,
                    }}
                >
                    <div className="flex items-center justify-end w-full">
                        <SVGs.ArrowSolution2 width={72} />
                    </div>
                    Dapatkan akses ke peluang investasi eksklusif!
                </div>
                <div
                    className="flex flex-col items-center leading-tight text-3xl px-8 py-4 text-left rounded-2xl text-cust-white font-semibold bg-cover bg-center bg-no-repeat h-80 w-1/3"
                    style={{
                        backgroundImage: `url("/src/assets/solution3.jpg")`,
                    }}
                >
                    <div className="flex items-center justify-end w-full">
                        <SVGs.KotakSolution3 width={72} />
                    </div>
                    Tonton video mendalam yang membahas panduan dan strategi terkait investasi serta pengelolaan startup.
                </div>
            </div>
        </div>
    );
};

export default Solution;
