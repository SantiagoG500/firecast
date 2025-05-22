import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold transition-colors duration-500 ease-in-out",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      level1: "from-[#D3F9D8] to-[#A8E6CF]",
      level2: "from-[#A8E6CF] to-[#6FEE8D]",
      level3: "from-[#6FEE8D] to-[#17c964]",
      level4: "from-[#FCE588] to-[#F6AD55]",
      level5: "from-[#FFB457] to-[#FF705B]",
      level6: "from-[#FF7E5F] to-[#FF4E50]",
      level7: "from-[#FF5F6D] to-[#FF0000]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        'level1',
        'level2',
        'level3',
        'level4',
        'level5',
        'level6',
        'level7',
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
