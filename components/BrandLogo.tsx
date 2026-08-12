'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/branding';

interface BrandLogoProps {
  href?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showWordmark?: boolean;
}

export function BrandLogo({
  href = '/',
  className = '',
  imageClassName = '',
  priority = false,
  showWordmark = false,
}: BrandLogoProps) {
  const logo = (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={BRAND.logoSrc}
        alt={`${BRAND.corporationName} logo`}
        width={120}
        height={46}
        sizes="(max-width: 768px) 100px, 120px"
        priority={priority}
        className={`h-auto w-auto max-h-7 max-w-[120px] object-contain ${imageClassName}`}
      />
      {showWordmark && (
        <div className="leading-none">
          <p className="text-[10px] tracking-[0.35em] text-slate-400 uppercase">{BRAND.corporationName}</p>
          <p className="mt-1 text-[9px] tracking-[0.3em] text-slate-600 uppercase">{BRAND.subsidiaryName}</p>
        </div>
      )}
    </div>
  );

  if (!href) return logo;

  return (
    <Link href={href} className="inline-flex items-center">
      {logo}
    </Link>
  );
}
