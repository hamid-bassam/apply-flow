/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapseFilled } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import { useMainPanelStore } from "../../../features/live-session/store/main-panel/MainPanelStore";

export const FloatingStateNav = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string, _key: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingStateNavDesktop items={items} className={desktopClassName} />
      <FloatingStateNavMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingStateNavMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block lg:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 10,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-card/80 hover:bg-card flex items-center justify-center"
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-card flex items-center justify-center"
      >
        <IconLayoutNavbarCollapseFilled className="h-5 w-5 text-card-foreground" />
      </button>
    </div>
  );
};

const FloatingStateNavDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string, _key: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden lg:flex h-10 gap-2 items-center  rounded-full bg-card px-4 ",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  // href,
  _key,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  _key: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return (val - bounds.x - bounds.width / 2) / 2;
    // bounds.width/2 
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [20, 40, 30]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [20, 40, 30]);

  const widthTransformIcon = useTransform(distance, [-120, 0, 120], [15, 20, 15]);
  const heightTransformIcon = useTransform(
    distance,
    [-120, 0, 120],
    [15, 20, 15]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const setActiveSectionKey = useMainPanelStore((s) => s.setActiveSectionKey);

  return (
    <Button variant={'ghost'} className="p-0 m-0 rounded-full">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-primary/50 hover:bg-primary/80 text-secondary-foreground hover:text-secondary  hover:scale-110 flex items-center justify-center relative"
        // dark:bg-neutral-800
        onClick={() => { setActiveSectionKey(_key) }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-primary  text-primary-foreground absolute left-1/2 -translate-x-1/2 top-12 w-fit text-xs"
            // dark:bg-neutral-800 dark:border-neutral-900 dark:text-white 
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center "
        >
          {icon}
        </motion.div>
      </motion.div>
    </Button>
  );
}
