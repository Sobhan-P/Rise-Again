import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  white?: boolean;
}

export default function Logo({ size = 'md', white = false }: LogoProps) {
  const wordSize = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl' };
  const subSize  = { sm: 'text-[9px]', md: 'text-[10px]', lg: 'text-xs' };

  return (
    <Link href="/" className="flex flex-col leading-none group" aria-label="Rise Again Web Technologies">
      {/* Wordmark: "rise" blue · "again" dark */}
      <span className={`${wordSize[size]} font-extrabold tracking-tight`}>
        <span className={white ? 'text-blue-400' : 'text-brand-600'}>rise</span>
        <span className={white ? 'text-white' : 'text-slate-900'}> again</span>
      </span>
      <span className={`${subSize[size]} font-semibold tracking-[0.2em] uppercase mt-0.5 ${white ? 'text-white/60' : 'text-slate-400'}`}>
        Web Technologies
      </span>
    </Link>
  );
}
