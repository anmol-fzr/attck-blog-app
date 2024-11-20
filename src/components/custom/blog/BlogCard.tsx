import { Card, CardContent, CardFooter } from "@/components";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

//interface BlogCardProps = {
//  title: string;
//  desc: string;
//}

export function BlogCard() {
  return (
    <Card className="transition-all duration-500 pt-4 relative group">
      <MoveUpRight className="absolute top-0 right-0 -translate-x-12 translate-y-12 group-hover:translate-y-4 group-hover:-translate-x-4 opacity-0 group-hover:opacity-100 transition-all" />
      <div className="flex flex-col h-full">
        <CardContent className="flex-1">
          <Link href="#" className="space-y-2" prefetch={false}>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                Taxing Laughter: The Joke Tax Chronicles
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Posted on August 24, 2023
              </p>
            </div>
            <p className="line-clamp-3">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
          </Link>
        </CardContent>
        <CardFooter>
          <Link
            href="#"
            className="text-sm font-medium inline-flex items-center space-x-1.5 group-hover:bg-secondary p-3 rounded-lg"
            prefetch={false}
          >
            Continue reading
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
