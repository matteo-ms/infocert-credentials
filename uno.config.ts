import { defineConfig, presetAttributify, presetUno } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
    presets: [presetUno(), presetForms()],
    theme: {
        colors: {
            primary: {
                50: "#E6F6FF",     /* Lightest - remains the same for the base */
                100: "#BAE3FF",    /* Slightly darker, maintaining the base palette's light end */
                200: "#8CCDFF",    /* Adjusted - a step towards integrating the new primary light color */
                300: "#5EB7FF",    /* Adjusted - blending towards the mid-point */
                400: "#30A1FF",    /* Adjusted - further towards the mid-point */
                500: "#1e789f",    /* New light primary color - adjusted position to reflect its brightness and saturation */
                600: "#166890",    /* Adjusted - a darker shade to transition smoothly to the darkest */
                700: "#0F587F",    /* Adjusted - nearing the darkest primary */
                800: "#0B2E4F",    /* New darkest primary color - as specified */
                900: "#071d2d"     /* Adjusted - even darker to provide depth, optional if #0B2E4F is to be the darkest */
            },
            gray: {
                50: "#F5F7FA",
                100: "#E4E7EB",
                200: "#CBD2D9",
                300: "#9AA5B1",
                400: "#7B8794",
                500: "#616E7C",
                600: "#52606D",
                700: "#3E4C59",
                800: "#323F4B",
                900: "#1F2933"
            },
            green: {
                50: "#E1FCF8",
                100: "#C1FEF6",
                200: "#92FDF2",
                300: "#62F4EB",
                400: "#3AE7E1",
                500: "#1CD4D4",
                600: "#0FB5BA",
                700: "#099AA4",
                800: "#07818F",
                900: "#05606E"
            },
            red: {
                50: "#FFE3E3",
                100: "#FFBDBD",
                200: "#FF9B9B",
                300: "#F86A6A",
                400: "#EF4E4E",
                500: "#E12D39",
                600: "#CF1124",
                700: "#AB091E",
                800: "#8A041A",
                900: "#610316"
            },
            orange: {
                50: "#FFE8D9",
                100: "#FFD0B5",
                200: "#FFB088",
                300: "#FF9466",
                400: "#F9703E",
                500: "#F35627",
                600: "#DE3A11",
                700: "#C52707",
                800: "#AD1D07",
                900: "#841003"
            },
            yellow: {
                50: "#FFFBEA",
                100: "#FFF3C4",
                200: "#FCE588",
                300: "#FADB5F",
                400: "#F7C948",
                500: "#F0B429",
                600: "#DE911D",
                700: "#CB6E17",
                800: "#B44D12",
                900: "#8D2B0B"
            },
            white: "#ffffff",
            black: "#000000"
        },
        breakpoints: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }
            md: "768px",
            // => @media (min-width: 768px) { ... }
            lg: "1024px",
            // => @media (min-width: 1024px) { ... }
            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            "2xl": "1536px"
            // => @media (min-width: 1536px) { ... }
        }
    }
});
