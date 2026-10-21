import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import './TechMarquee.css';

const technologyImageFiles = import.meta.glob<string>(
  '../assets/technologies/*.{png,jpg,jpeg,svg,webp}',
  { eager: true, query: '?url', import: 'default' },
);

/** Quantos cards ficam visíveis atrás (para cada lado). */
const OFFSETS = [-2, -1, 0, 1, 2, 3];

/** Throttle do scroll em ms — evita avanços em loop. */
const WHEEL_THROTTLE = 140;

export const TechMarquee: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const technologies = activeFilter === 'all'
    ? TECH_STACK
    : TECH_STACK.filter((technology) => (
      activeFilter === 'mobile'
        ? technology.category === 'Mobile' || technology.mobile === true
        : technology.category !== 'Mobile' && technology.mobile !== true
    ));

  const wheelLockRef = useRef(false);
  const wheelTimerRef = useRef<number | null>(null);

  /* ---------- Auto-play (pausa no hover) ---------- */
  useEffect(() => {
    if (technologies.length < 2) return undefined;
    if (isHovering) return undefined; // hover manda no scroll

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % technologies.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [technologies.length, isHovering]);

  /* ---------- Scroll do rato → avança/recua rápido ---------- */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    if (technologies.length < 2) return undefined;

    const onWheel = (event: WheelEvent) => {
      // Só age quando o rato está por cima
      if (!isHovering) return;
      if (Math.abs(event.deltaY) < 4) return;

      // Previne o scroll da página enquanto estamos a navegar os cards
      event.preventDefault();

      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const direction = event.deltaY > 0 ? 1 : -1;
      setActiveIndex((index) =>
        (index + direction + technologies.length) % technologies.length,
      );

      if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = window.setTimeout(() => {
        wheelLockRef.current = false;
      }, WHEEL_THROTTLE);
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      stage.removeEventListener('wheel', onWheel);
      if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current);
    };
  }, [isHovering, technologies.length]);

  const stageRef = useRef<HTMLDivElement>(null);

  const move = useCallback(
    (direction: number) => {
      setActiveIndex((index) =>
        (index + direction + technologies.length) % technologies.length,
      );
    },
    [technologies.length],
  );

  const categoryTranslations: Record<string, Parameters<typeof t>[0]> = {
    Frontend: 'tech.frontend',
    Language: 'tech.language',
    Framework: 'tech.framework',
    Styling: 'tech.styling',
    Backend: 'tech.backend',
    State: 'tech.state',
    Design: 'tech.design',
    API: 'tech.api',
    Database: 'tech.database',
    DevOps: 'tech.devops',
    'Build Tool': 'tech.buildTool',
    IA: 'tech.ai',
    Mobile: 'tech.mobile',
  };

  const offsets = technologies.length < OFFSETS.length
    ? Array.from(
      { length: technologies.length },
      (_, index) => index - Math.floor(technologies.length / 2),
    )
    : OFFSETS;
  const visibleCovers = offsets.map((offset) => {
    const index = (activeIndex + offset + technologies.length) % technologies.length;
    return { technology: technologies[index], index, offset };
  }).filter((cover) => Boolean(cover.technology));

  return (
    <section
      aria-label={t('tech.title')}
      className="tech-album-section relative overflow-hidden border-y border-slate-200/70 bg-white py-12 dark:border-slate-800 dark:bg-slate-950 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.09),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 text-center">
          <span className="text-base font-mono font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 sm:text-lg">
            {t('tech.title')}
          </span>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="mb-5 flex justify-center gap-2" role="group" aria-label={t('tech.filterLabel')}>
          {([
            { id: 'all', label: t('tech.filterAll') },
            { id: 'web', label: t('tech.web') },
            { id: 'mobile', label: t('tech.mobile') },
          ] as const).map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                setActiveFilter(filter.id);
                setActiveIndex(0);
              }}
              aria-pressed={activeFilter === filter.id}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeFilter === filter.id
                  ? 'border-sky-500 bg-sky-500 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-700 dark:hover:text-sky-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          ref={stageRef}
          className="tech-album-stage"
          aria-live="polite"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            type="button"
            onClick={() => move(-1)}
            className="tech-album-arrow tech-album-arrow--left"
            aria-label={t('tech.previous')}
          >
            <ChevronLeft size={22} />
          </button>

          {visibleCovers.map(({ technology, index, offset }) => {
            const translatedCategory = categoryTranslations[technology.category]
              ? t(categoryTranslations[technology.category])
              : technology.category;
            const isActive = offset === 0;
            const image = technologyImageFiles[`../assets/technologies/${technology.image}`];
            return (
              <button
                type="button"
                key={`${technology.name}-${index}`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`${technology.name}, ${translatedCategory}`}
                className={`tech-album-card ${isActive ? 'tech-album-card--active' : ''}`}
                style={{
                  '--album-offset': offset,
                  '--album-distance': Math.abs(offset),
                  '--album-color': technology.color,
                } as React.CSSProperties}
              >
                <span className="tech-album-sleeve">
                  <span
                    className={`tech-album-art ${image ? 'tech-album-art--image' : ''}`}
                    aria-hidden="true"
                  >
                    {image ? (
                      <img className="tech-album-image" src={image} alt="" />
                    ) : (
                      <>
                        <span className="tech-album-orbit tech-album-orbit--one" />
                        <span className="tech-album-orbit tech-album-orbit--two" />
                        <span className="tech-album-monogram">
                          {technology.name.slice(0, 2).toUpperCase()}
                        </span>
                      </>
                    )}
                  </span>
                  <span className="tech-album-name">{technology.name}</span>
                  <span className="tech-album-category">{translatedCategory}</span>
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => move(1)}
            className="tech-album-arrow tech-album-arrow--right"
            aria-label={t('tech.next')}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-2 flex min-h-8 items-center justify-center gap-2 text-center" aria-live="polite">
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {technologies[activeIndex]?.name}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {technologies[activeIndex] && categoryTranslations[technologies[activeIndex].category]
              ? t(categoryTranslations[technologies[activeIndex].category])
              : technologies[activeIndex]?.category}
          </span>
        </div>
      </div>
    </section>
  );
};