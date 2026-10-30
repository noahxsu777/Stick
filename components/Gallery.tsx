import React, { useEffect, useRef, useState } from 'react';
import { Building2, ChevronLeft, ChevronRight, Expand, Home, Paintbrush, Pause, Play, X } from 'lucide-react';
import type { Language } from '../App';

type Category = 'residential' | 'commercial' | 'remodeling';
const groups: { key: Category; icon: typeof Home; en: string; es: string; photos: string[] }[] = [
  { key: 'residential', icon: Home, en: 'Homes', es: 'Hogares', photos: ['1600607687939-ce8a6c25118c','1600566753086-00f18fb6b3ea','1600607687920-4e2a09cf159d'] },
  { key: 'commercial', icon: Building2, en: 'Businesses', es: 'Negocios', photos: ['1497366754035-f200968a6e72','1497366811353-6870744d04b2','1497366216548-37526070297c'] },
  { key: 'remodeling', icon: Paintbrush, en: 'Remodeling', es: 'Remodelación', photos: ['1589939705384-5185137a7f0f','1600585154340-be6161a56a0c','1600607687920-4e2a09cf159d'] }
];
const photo = (id: string, width = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Gallery({ language }: { language: Language }) {
  const es = language === 'es';
  const [category, setCategory] = useState<Category>('residential');
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startX = useRef<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const group = groups.find(item => item.key === category)!;
  const title = es ? group.es : group.en;
  const move = (step: number) => { setIndex(current => (current + step + group.photos.length) % group.photos.length); };
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { setReducedMotion(preference.matches); if (preference.matches) setPlaying(false); };
    update(); preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!playing || reducedMotion) return;
    const timer = window.setInterval(() => { if (!document.hidden) { setIndex(current => (current + 1) % 3); } }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion, category]);
  const keys = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); setPlaying(false); move(event.key === 'ArrowRight' ? 1 : -1); }
  };
  return <section className="gallery-section gallery-v2" id="gallery">
    <div className="sw-container">
      <div className="section-heading"><div><span className="section-kicker">{es ? 'INSPIRACIÓN PARA TU ESPACIO' : 'INSPIRATION FOR YOUR SPACE'}</span><h2>{es ? 'Cada espacio, una posibilidad.' : 'Every space, a possibility.'}</h2></div><p>{es ? 'Explora la galería y encuentra inspiración para tu próximo proyecto.' : 'Browse the gallery and find inspiration for your next project.'}</p></div>
      <div className="gallery-filter" role="group" aria-label={es ? 'Categorías de galería' : 'Gallery categories'}>{groups.map(({key,icon: Icon,en,es: spanish}) => <button key={key} aria-pressed={category === key} onClick={() => { setCategory(key); setIndex(0); setPlaying(false); }}><Icon size={18}/><span>{es ? spanish : en}</span><small>03</small></button>)}</div>
      <div className="gallery-player">
        <div className="gallery-canvas" role="region" aria-roledescription={es ? 'carrusel' : 'carousel'} aria-label={title} tabIndex={0} onKeyDown={keys} onTouchStart={event => { startX.current = event.touches[0].clientX; }} onTouchCancel={() => { startX.current = null; }} onTouchEnd={event => { if (startX.current === null) return; const delta = event.changedTouches[0].clientX - startX.current; if (Math.abs(delta) > 45) { setPlaying(false); move(delta < 0 ? 1 : -1); } startX.current = null; }}>
          {groups.flatMap(item => item.photos.map((id,i) => <img key={`${item.key}-${i}`} className={`gallery-layer ${item.key === category && i === index ? 'is-active' : ''}`} src={photo(id)} loading="lazy" alt={item.key === category && i === index ? `${title} — ${es ? 'imagen de referencia' : 'reference image'} ${i+1}` : ''} aria-hidden={item.key !== category || i !== index} />))}
          <span className="gallery-reference">{es ? 'Imágenes de referencia' : 'Reference images'}</span>
          <button className="gallery-expand" type="button" aria-label={es ? 'Ampliar imagen' : 'Expand image'} onClick={() => { setPlaying(false); dialog.current?.showModal(); }}><Expand size={19}/></button>
          <div className="gallery-caption" key={category}><span>SUMAQ WASI · {String(index + 1).padStart(2,'0')} / 03</span><h3>{title}</h3></div>
          <div className="gallery-float-controls"><button aria-label={es ? 'Imagen anterior' : 'Previous image'} onClick={() => { setPlaying(false); move(-1); }}><ChevronLeft size={21}/></button><button aria-label={es ? 'Imagen siguiente' : 'Next image'} onClick={() => { setPlaying(false); move(1); }}><ChevronRight size={21}/></button></div>
        </div>
        <div className="gallery-toolbar"><div><span className="gallery-count" aria-live={playing ? 'off' : 'polite'}>{String(index + 1).padStart(2,'0')}<small> / 03</small></span><span className="gallery-swipe-note">{es ? 'Desliza para explorar' : 'Swipe to explore'}</span></div><button className="gallery-play" aria-pressed={playing} onClick={() => setPlaying(current => !current)} disabled={reducedMotion}>{playing ? <Pause size={16}/> : <Play size={16}/>}<span>{playing ? (es ? 'Pausar' : 'Pause') : (es ? 'Reproducir' : 'Play gallery')}</span></button></div>
        <div className="gallery-thumbnails" aria-label={es ? 'Elegir imagen' : 'Choose image'}>{group.photos.map((id,i) => <button key={`${category}-${i}`} className={index === i ? 'selected' : ''} aria-label={`${es ? 'Ver imagen' : 'View image'} ${i+1}`} aria-current={index === i ? 'true' : undefined} onClick={() => { setIndex(i); setPlaying(false); }}><img src={photo(id,320)} alt="" loading="lazy"/><span>0{i+1}</span><i/></button>)}</div>
      </div>
    </div>
    <dialog className="gallery-lightbox" ref={dialog} onKeyDown={keys} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button className="lightbox-close" aria-label={es ? 'Cerrar imagen' : 'Close image'} onClick={() => dialog.current?.close()}><X/></button><img key={`${category}-${index}`} src={photo(group.photos[index],1800)} alt={`${title} — ${es ? 'imagen de referencia' : 'reference image'}`}/><div className="lightbox-controls"><button aria-label={es ? 'Imagen anterior' : 'Previous image'} onClick={()=>move(-1)}><ChevronLeft/></button><span>{title} · 0{index+1} / 03</span><button aria-label={es ? 'Imagen siguiente' : 'Next image'} onClick={()=>move(1)}><ChevronRight/></button></div></dialog>
  </section>;
}
