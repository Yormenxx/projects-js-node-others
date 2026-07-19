import { SYMBOLS_DATA } from '../data.js'

const Reference = () => {
    return (
        <>
            <div className="w-full bg-[#1c2127] border-t border-[#283039]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">

                                <h3 className="text-xl font-bold">Quick Reference Cheat Sheet</h3>
                            </div>

                        </div>

                        <div className="overflow-x-auto rounded-xl border border-[#3b4754]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#111418] text-[#9dabb9] text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="p-4 font-bold border-b border-[#3b4754]">Symbol</th>
                                        <th className="p-4 font-bold border-b border-[#3b4754]">Description</th>
                                        <th className="p-4 font-bold border-b border-[#3b4754]">Windows (Alt + ...)</th>
                                        <th className="p-4 font-bold border-b border-[#3b4754]">Linux (Ctrl+Shift+U ...)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#3b4754]">
                                    {SYMBOLS_DATA.map((symbol, idx) => (
                                        <tr key={idx} className="hover:bg-[#283039] transition-colors">
                                            <td className="p-4 text-2xl">{symbol.char}</td>
                                            <td className="p-4 text-[#9dabb9] text-sm">{symbol.name}</td>
                                            <td className="p-4 font-mono text-sm">{symbol.windows}</td>
                                            <td className="p-4 font-mono text-sm">{symbol.linux}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reference
