import { services } from "@/data/services";
import ServiceDetails from "./ServiceDetails";

// Required for static build (next export)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-700">
          Service Not Found 😢
        </h1>
      </main>
    );
  }

  return <ServiceDetails service={service} />;
}
