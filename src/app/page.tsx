import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';

export default async function Page() {
  return (
    <div className="mx-4 mt-2 flex items-center gap-2 md:mx-8 md:mt-4">
      <Icons.logo className="size-8" />
      <h1 className="text-xl md:text-2xl">Listi</h1>
      <ThemeToggle />
    </div>
  );
}
