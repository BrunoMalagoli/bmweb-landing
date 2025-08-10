"use client";

import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { Globe, Moon, Sun, Menu } from "lucide-react";

// Types
interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationData {
  en: NavigationItem[];
  es: NavigationItem[];
}

interface Language {
  language: "en" | "es";
  setLanguage: (lang: "en" | "es") => void;
}

interface Theme {
  theme: string;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const navigation: NavigationData = {
  en: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  es: [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contact" },
  ],
};

const themeLabels = {
  en: {
    light: "Light",
    dark: "Dark",
    system: "System",
    theme: "Theme",
  },
  es: {
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    theme: "Tema",
  },
};

const languageLabels = {
  en: {
    language: "Language",
    english: "English",
    spanish: "Español",
  },
  es: {
    language: "Idioma",
    english: "English",
    spanish: "Español",
  },
};

export function Navbar(): JSX.Element {
  const { language, setLanguage }: Language = useLanguage();
  const { theme, setTheme }: Theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: NavigationItem[] = navigation[language];
  const themeText = themeLabels[language];
  const langText = languageLabels[language];

  const handleNavClick = (href: string): void => {
    setIsOpen(false);
    // Optional: Add smooth scrolling or navigation logic here
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (lang: "en" | "es"): void => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const handleThemeChange = (newTheme: "light" | "dark" | "system"): void => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <h1 className="text-xl font-bold text-primary truncate">BMWEB</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item: NavigationItem) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  {langText.english}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  {langText.spanish}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  {themeText.light}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  {themeText.dark}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  {themeText.system}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {language === "en" ? "Start Project" : "Comenzar Proyecto"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] max-w-[80vw]">
                <SheetHeader>
                  <SheetTitle className="text-left text-xl font-bold text-primary">
                    BMWEB
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-4 mt-8">
                  {/* Navigation Links */}
                  <div className="space-y-1">
                    {navItems.map((item: NavigationItem) => (
                      <SheetClose asChild key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                          className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                        >
                          {item.name}
                        </a>
                      </SheetClose>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  {/* Language Selector */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground px-3">
                      {langText.language}
                    </h3>
                    <div className="space-y-1">
                      <Button
                        variant={language === "en" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("en")}
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {langText.english}
                      </Button>
                      <Button
                        variant={language === "es" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("es")}
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {langText.spanish}
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Theme Selector */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground px-3">
                      {themeText.theme}
                    </h3>
                    <div className="space-y-1">
                      <Button
                        variant={theme === "light" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleThemeChange("light")}
                      >
                        <Sun className="mr-2 h-4 w-4" />
                        {themeText.light}
                      </Button>
                      <Button
                        variant={theme === "dark" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleThemeChange("dark")}
                      >
                        <Moon className="mr-2 h-4 w-4" />
                        {themeText.dark}
                      </Button>
                      <Button
                        variant={theme === "system" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleThemeChange("system")}
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {themeText.system}
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Mobile CTA Button */}
                  <SheetClose asChild>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                      {language === "en"
                        ? "Start Project"
                        : "Comenzar Proyecto"}
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
