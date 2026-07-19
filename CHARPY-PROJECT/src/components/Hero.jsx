

import CharHelperLanding from './CharHelperLanding.jsx';
import Timeline from './Timeline.jsx'
import {
    Keyboard,
    Hash,
    CornerDownLeft,
    Type,
    Binary
} from 'lucide-react';
const Hero = () => {
    return (
        <>
            <main className="flex-1 flex flex-col items-center">

                <CharHelperLanding/>
                <div className="w-full max-w-[1200px] px-6 lg:px-10 py-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Windows vs Linux Input Methods
                        </h1>
                        <p className="text-[#9dabb9] text-lg max-w-3xl">
                            A side-by-side comparison of entering special characters across different operating systems. Master the Alt-codes and Unicode sequences.
                        </p>
                    </div>
                </div>

                {/* --- Main Comparison Section --- */}
                <div className="w-full max-w-[1200px] px-6 lg:px-10 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Windows Card */}
                        <div className="flex flex-col gap-6 rounded-xl border border-[#3b4754] bg-[#161b21] p-8 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#359EFF]/20 rounded-lg text-[#359EFF]">
                                    <span className="material-symbols-outlined text-3xl">desktop_windows</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Windows Alt-Codes</h2>
                                    <p className="text-[#9dabb9] text-sm">System-wide decimal entry using the NumPad</p>
                                </div>
                            </div>

                            {/* Keyboard Illustration */}
                            <div className="bg-[#101418] rounded-lg p-6 flex flex-col items-center gap-4 border border-[#283039]">
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-12 flex items-center justify-center border-2 border-[#359EFF] bg-[#359EFF]/10 rounded-md text-[#359EFF] font-bold shadow-[0_4px_0_0_#137fec]">ALT</div>
                                        <span className="text-[10px] text-[#9dabb9] uppercase font-bold tracking-wider">Hold Key</span>
                                    </div>
                                    <div className="text-2xl text-[#3b4754] self-center">+</div>
                                    <div className="grid grid-cols-3 gap-1 bg-[#1c2127] p-2 rounded border border-[#3b4754]">
                                        {[7, 8, 9, 4, 5, 6].map(n => (
                                            <div key={n} className={`w-6 h-6 bg-[#283039] rounded text-[10px] flex items-center justify-center ${n === 5 ? 'border-2 border-[#359EFF]/50 text-white font-bold' : ''}`}>
                                                {n}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[10px] text-[#9dabb9] uppercase font-bold tracking-wider self-end mb-1">NumPad</div>
                                </div>
                                <p className="text-xs text-[#9dabb9]">Requirement: Hardware NumPad with NumLock ON</p>
                            </div>

                            <Timeline steps={[
                                {
                                    icon: Keyboard, // Pasamos la referencia del componente
                                    title: 'Hold the left ALT key',
                                    desc: 'Ensure your cursor is in a text input field.'
                                },
                                {
                                    icon: Hash,
                                    title: 'Type decimal code',
                                    desc: 'Use numeric keypad. Example: 0169 for ©'
                                },
                                {
                                    icon: CornerDownLeft,
                                    title: 'Release ALT',
                                    desc: 'The symbol will appear immediately.'
                                }
                            ]} />
                        </div>

                        {/* Linux Card */}
                        <div className="flex flex-col gap-6 rounded-xl border border-[#3b4754] bg-[#161b21] p-8 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#359EFF]/20 rounded-lg text-[#359EFF]">
                                    <span className="material-symbols-outlined text-3xl">terminal</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Linux Unicode Entry</h2>
                                    <p className="text-[#9dabb9] text-sm">Standard Hexadecimal sequence for GTK/GNOME</p>
                                </div>
                            </div>

                            <div className="bg-[#101418] rounded-lg p-6 flex flex-col items-center gap-4 border border-[#283039]">
                                <div className="flex gap-2">
                                    <div className="flex gap-1">
                                        <kbd className="w-12 h-10 flex items-center justify-center border border-[#359EFF] bg-[#359EFF]/10 rounded-md text-[10px] text-[#359EFF] font-bold">CTRL</kbd>
                                        <kbd className="w-12 h-10 flex items-center justify-center border border-[#359EFF] bg-[#359EFF]/10 rounded-md text-[10px] text-[#359EFF] font-bold">SHIFT</kbd>
                                        <kbd className="w-10 h-10 flex items-center justify-center border-2 border-[#359EFF] bg-[#359EFF] rounded-md text-white font-bold shadow-[0_4px_0_0_#0d5db0]">U</kbd>
                                    </div>
                                    <div className="text-2xl text-[#3b4754] self-center">+</div>
                                    <div className="flex gap-1 self-center">
                                        <div className="w-8 h-8 bg-[#1c2127] border border-[#3b4754] rounded flex items-center justify-center text-xs font-mono text-white">a</div>
                                        <div className="w-8 h-8 bg-[#1c2127] border border-[#3b4754] rounded flex items-center justify-center text-xs font-mono text-white">9</div>
                                    </div>
                                </div>
                                <p className="text-xs text-[#9dabb9]">Works in most modern Linux desktop environments</p>
                            </div>

                            <Timeline steps={[
                                {
                                    icon: Type,
                                    title: 'Press Ctrl + Shift + U',
                                    desc: 'An underlined "u" prompt appears at your cursor.'
                                },
                                {
                                    icon: Binary,
                                    title: 'Type Hexadecimal code',
                                    desc: 'Type the Unicode hex. Example: a9 for ©'
                                },
                                {
                                    icon: CornerDownLeft,
                                    title: 'Press Enter or Space',
                                    desc: 'The underlined text transforms into the character.'
                                }
                            ]} />
                        </div>
                    </div>
                </div>

               
               
            </main>

        </>
    )
}

export default Hero
