import { createFileRoute } from '@tanstack/react-router';
import { Button } from '#/components/ui/button';
import { ArrowLeftIcon, Link } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card';

export const Route = createFileRoute('/todos/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-2">
      <Button asChild variant='ghost' size='sm' className='text-white'>
        <Link to='/'>
          <ArrowLeftIcon /> Todo List
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Add New Todo</CardTitle>
          <CardDescription>
            Create a new task to add to your todo list
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <TodoForm /> */}
        </CardContent>
      </Card>
    </div>
  )
};
