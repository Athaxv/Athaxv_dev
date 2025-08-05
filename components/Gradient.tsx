import React, { ReactNode } from 'react'

type GradientProps = {
  children: ReactNode;
};

function Gradient({ children }: GradientProps) {
    return (
        <div>
            <div className=" w-full bg-white dark:bg-black relative">
                {/* Diagonal Stripes Background */}
                <div
                    className="absolute inset-0 dark:-z-10 z-0 bg-[repeating-linear-gradient(45deg,transparent_0_2px,theme(colors.slate.100)_2px_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent_0_2px,theme(colors.black)_2px_4px)]"
                />
                {/* Your Content/Components */}

                <div className='z-10 relative'>
                    {children}
                </div>
            </div></div>
    )
}

export default Gradient