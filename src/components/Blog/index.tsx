import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';

export default function Blog() {
  return (
    <Card className="max-w-[25rem] overflow-hidden shadow-none">
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
          className="rounded-3xl"
        />
      </CardHeader>
      <CardBody className="space-y-2 p-4 text-darkLight">
        <span className="text-sm uppercase text-org font-medium">TikTok</span>
        <Typography variant="h5" color="blue-gray">
          UI/UX Review Check
        </Typography>
        <Typography color="gray" className="font-medium line-clamp-3">
          Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams
          and inspire others.
        </Typography>
        <div className="flex space-x-4">
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="w-1h-12 h-12 rounded-full border-2 border-white hover:z-10"
            />
          </Tooltip>
          <div className="">
            <p className="font-semibold">Full Name</p>
            <p className='text-sm font-medium'>Jul 07 2023</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
