'use client';
/**
 * Adapted from Aceternity UI's Floating Dock, via japard-labs.
 * Flipped to sit at the top: icons grow downward, tooltips and the mobile menu open below.
 **/

import { useRef, useState } from 'react';
import Link from 'next/link';
import { PanelTopOpen } from 'lucide-react';
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from 'motion/react';

// An item is a link, or a button when it has `onClick` (e.g. the theme toggle).
export type DockItem = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

function DockAction({
  item,
  className,
  onNavigate,
  children,
  ...props
}: {
  item: DockItem;
  className?: string;
  onNavigate?: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  if (item.onClick || !item.href) {
    return (
      <button type='button' aria-label={item.title} onClick={item.onClick} className={className} {...props}>
        {children}
      </button>
    );
  }
  return (
    <Link
      href={item.href}
      aria-label={item.title}
      onClick={onNavigate}
      className={className}
      {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </Link>
  );
}

export function FloatingDock({ items }: { items: DockItem[] }) {
  return (
    <>
      <FloatingDockDesktop items={items} />
      <FloatingDockMobile items={items} />
    </>
  );
}

function FloatingDockMobile({ items }: { items: DockItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative block md:hidden'>
      <AnimatePresence>
        {open && (
          <motion.div layoutId='nav' className='absolute inset-x-0 top-full mt-2 flex flex-col gap-2'>
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: { delay: (items.length - 1 - idx) * 0.05 },
                }}
                transition={{ delay: idx * 0.05 }}
              >
                <DockAction
                  item={item}
                  onNavigate={() => setOpen(false)}
                  className='flex size-10 items-center justify-center rounded-full border border-border bg-surface-2 text-muted-foreground transition-colors hover:text-foreground'
                >
                  <div className='size-4 [&>svg]:size-full'>{item.icon}</div>
                </DockAction>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className='flex size-10 items-center justify-center rounded-full border border-border bg-surface-2/90 backdrop-blur-xl'
      >
        <PanelTopOpen className='size-5 text-muted-foreground' />
      </button>
    </div>
  );
}

function FloatingDockDesktop({ items }: { items: DockItem[] }) {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto hidden h-16 items-start gap-4 rounded-2xl border border-border bg-surface/80 px-4 pt-3 backdrop-blur-xl md:flex'
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} item={item} />
      ))}
    </motion.div>
  );
}

const spring = { mass: 0.1, stiffness: 150, damping: 12 };

function IconContainer({ mouseX, item }: { mouseX: MotionValue<number>; item: DockItem }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), spring);
  const iconSize = useSpring(useTransform(distance, [-150, 0, 150], [20, 40, 20]), spring);

  const [hovered, setHovered] = useState(false);

  return (
    <DockAction item={item} className='rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50'>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative flex aspect-square items-center justify-center rounded-full bg-surface-2 text-muted-foreground ring-1 ring-border transition-colors hover:text-foreground'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -2, x: '-50%' }}
              className='absolute -bottom-8 left-1/2 w-fit whitespace-pre rounded-md border border-border bg-popover px-2 py-0.5 text-xs text-popover-foreground'
            >
              {item.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className='flex items-center justify-center [&>svg]:size-full'
        >
          {item.icon}
        </motion.div>
      </motion.div>
    </DockAction>
  );
}
