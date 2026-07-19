import React, { useState } from 'react';

const Header = () => {


    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div>
                <header className="flex items-center justify-between border-b border-[#283039] px-6 md:px-10 py-3 bg-[#0f1923] sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="size-6 text-[#359EFF] flex items-center justify-center">
                                <span className="material-symbols-outlined">keyboard</span>
                            </div>
                            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">
                                ShortcutMaster
                            </h2>
                        </div>
                        <nav className="hidden lg:flex items-center gap-9">
                            {['Windows', 'Linux', 'Unicode Map', 'Symbols'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#9dabb9] hover:text-white text-sm font-medium transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-1 justify-end gap-4">
                        <label className="flex flex-col min-w-40 h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden bg-[#1c2127]">
                                <div className="text-[#9dabb9] flex items-center justify-center pl-4">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </div>
                                <input
                                    className="w-full border-none bg-transparent text-white focus:ring-0 px-4 pl-2 text-base placeholder:text-[#9dabb9]"
                                    placeholder="Find a symbol..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </label>
                        <button className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-[#359EFF] text-white text-sm font-bold hover:bg-[#359EFF]/90 transition-colors">
                            Feedback
                        </button>
                    </div>
                </header>

            </div>

        </>
    )
}

export default Header
