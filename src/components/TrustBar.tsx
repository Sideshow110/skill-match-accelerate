
export const TrustBar = () => {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container-custom py-8">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {/* Company logos would go here - using placeholder rectangles */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="h-8 bg-muted-foreground/20 rounded-md mx-auto w-24 md:w-32"
              aria-label="Company logo"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
