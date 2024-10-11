import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { H1 } from '@/components/ui/typography';

export default async function Page() {
  return (
    <div className="mx-4 mt-2 flex items-center gap-2 md:mx-8 md:mt-4">
      <Icons.logo className="size-8" />
      <H1>Listi</H1>
      <ThemeToggle />
    </div>
  );
}
