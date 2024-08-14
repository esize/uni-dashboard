import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  BriefcaseIcon,
  CalendarIcon,
  ClipboardIcon,
  MegaphoneIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type LinkItemProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href?: Url;
};
const LinkItem: React.FC<LinkItemProps> = (props) => {
  return (
    <Link
      href={props.href ?? "#"}
      className="flex items-center gap-4 rounded-md bg-muted p-4 transition-all hover:bg-muted hover:shadow-md duration-300 hover:text-accent-foreground/80"
      prefetch={false}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
        {props.icon}
      </div>
      <div className="grid gap-1">
        <div className="font-medium">{props.title}</div>
        <div className="text-sm text-muted-foreground">{props.description}</div>
      </div>
    </Link>
  );
};
export function SampleDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Welcome Back, Student!
        </h1>
      </div>
      <div className="flex-1 rounded-lg shadow-sm mx-auto mt-8">
        <div className="columns-3 gap-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <CalendarIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Alumni Reunion</div>
                    <div className="text-sm text-muted-foreground">
                      June 15, 2024
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <CalendarIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Open House</div>
                    <div className="text-sm text-muted-foreground">
                      July 1, 2024
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <CalendarIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Career Fair</div>
                    <div className="text-sm text-muted-foreground">
                      September 1, 2024
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-sm text-primary" prefetch={false}>
                View all events
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MegaphoneIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">New Scholarship Program</div>
                    <div className="text-sm text-muted-foreground">
                      Applications open now
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MegaphoneIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">
                      Campus Sustainability Initiative
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Learn more and get involved
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MegaphoneIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Commencement Ceremony</div>
                    <div className="text-sm text-muted-foreground">
                      May 18, 2024 at 10 AM
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-sm text-primary" prefetch={false}>
                View all announcements
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <LinkItem
                  title="Course Catalog"
                  description="Browse our course offerings"
                  icon={<ClipboardIcon className="h-6 w-6" />}
                />
                <LinkItem
                  title="Academic Calendar"
                  description="View important dates and deadlines"
                  icon={<CalendarIcon className="h-6 w-6" />}
                />
                <LinkItem
                  title="Career Services"
                  description="Explore job opportunities and resources"
                  icon={<BriefcaseIcon className="h-6 w-6" />}
                  href="/career-services"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
