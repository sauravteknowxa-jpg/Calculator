import Button from "./Button";
import Badge from "./Badge";
import { Card, CardContent } from "./Card";
import './style.css';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Platform</h1>
          <p className="text-lg text-gray-600">
            Explore our modern UI components built with Tailwind CSS and React.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="default" className="cta-primary">Get Started</Button>
            <Button size="lg" variant="outline" className="cta-secondary">Learn More</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Status Badges</h2>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example Cards</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Card Title 1</h3>
                <p className="text-gray-600">This is an example of a card component. You can put any content here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Card Title 2</h3>
                <p className="text-gray-600">Cards are useful for grouping related content.</p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
