import * as React from 'react';
import { cn } from "@/lib/utils";
import { ShinyButton } from "./shiny-button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Code } from "lucide-react";

// --- 1. Typescript Interfaces (API) ---

type BillingCycle = 'monthly' | 'semestral' | 'annually';

interface Feature {
  name: string;
  isIncluded: boolean;
  tooltip?: string;
}

interface PriceTier {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceSemestral: number;
  priceAnnually: number;
  isPopular: boolean;
  badge?: string;
  buttonLabel: string;
  features: Feature[];
}

interface PricingComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The list of pricing tiers to display. Must contain exactly 3 tiers. */
  plans: [PriceTier, PriceTier, PriceTier];
  /** The currently selected billing cycle. */
  billingCycle: BillingCycle;
  /** Callback function when the user changes the billing cycle. */
  onCycleChange: (cycle: BillingCycle) => void;
  /** Callback function when a user selects a plan. */
  onPlanSelect: (planId: string, cycle: BillingCycle) => void;
}

// --- 2. Utility Components ---

/** Renders a single feature row with an icon. */
const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.isIncluded ? Code : X;
  const iconColor = feature.isIncluded ? "text-blue-700" : "text-muted-foreground";

  return (
    <li className="flex items-start space-x-3 py-2 px-3 rounded-lg bg-white/20 ring-1 ring-black/5">
      <Icon className={cn("h-4 w-4 flex-shrink-0 mt-0.5", iconColor)} aria-hidden="true" />
      <span className={cn("text-sm text-black", feature.isIncluded ? "text-foreground" : "text-muted-foreground")}>
        {feature.name}
      </span>
    </li>
  );
};

// --- 3. Main Component: PricingComponent ---

const PricingComponent: React.FC<PricingComponentProps> = ({
  plans,
  billingCycle,
  onCycleChange,
  onPlanSelect,
  className,
  ...props
}) => {
  // Ensure exactly 3 plans are passed for the intended layout
  if (plans.length !== 3) {
    console.error("PricingComponent requires exactly 3 pricing tiers.");
    return null;
  }

  const annualDiscountPercent = 20; // Example: 20% discount for annual billing

  // --- 3.1. Billing Toggle ---
  const CycleToggle = (
    <div className="flex justify-center mb-10 mt-2">
      <ToggleGroup
        type="single"
        value={billingCycle}
        onValueChange={(value) => {
          if (value && (value === 'monthly' || value === 'semestral' || value === 'annually')) {
            onCycleChange(value);
          }
        }}
        aria-label="Select billing cycle"
        className="border rounded-lg p-1 bg-muted/50 dark:bg-muted/30"
      >
        <ToggleGroupItem
          value="monthly"
          aria-label="Monthly Billing"
          className="px-6 py-1.5 text-sm font-medium data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:border data-[state=on]:ring-1 data-[state=on]:ring-ring/20 rounded-md transition-colors"
        >
          Mensal
        </ToggleGroupItem>
        <ToggleGroupItem
          value="semestral"
          aria-label="Semestral Billing"
          className="px-6 py-1.5 text-sm font-medium data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:border data-[state=on]:ring-1 data-[state=on]:ring-ring/20 rounded-md transition-colors relative"
        >
          Semestral
          <span className="absolute -top-3 right-0 text-xs font-semibold text-primary/80 dark:text-primary/70 bg-primary/10 dark:bg-primary/20 px-1.5 rounded-full whitespace-nowrap">
            Economize
          </span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="annually"
          aria-label="Annual Billing"
          className="px-6 py-1.5 text-sm font-medium data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:border data-[state=on]:ring-1 data-[state=on]:ring-ring/20 rounded-md transition-colors relative"
        >
          Anual
          <span className="absolute -top-3 right-0 text-xs font-semibold text-primary/80 dark:text-primary/70 bg-primary/10 dark:bg-primary/20 px-1.5 rounded-full whitespace-nowrap">
            Economize {annualDiscountPercent}%
          </span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );

  // --- 3.2. Pricing Cards & Comparison Table Data ---

  // Extract all unique feature names across all plans for the comparison table header
  const allFeatures = Array.from(new Set(plans.flatMap(p => p.features.map(f => f.name))));
  
  // Render the list of pricing cards
  const PricingCards = (
    <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
      {plans.map((plan) => {
        const isFeatured = plan.isPopular;
        const currentPrice = billingCycle === 'monthly' ? plan.priceMonthly : 
                         billingCycle === 'semestral' ? plan.priceSemestral : 
                         plan.priceAnnually;
        const originalMonthlyPrice = plan.priceMonthly;
        const priceSuffix = billingCycle === 'monthly' ? '/mês' : 
                       billingCycle === 'semestral' ? '/semestre' : 
                       '/ano';

        return (
          <Card
            key={plan.id}
            className={cn(
              "flex flex-col transition-all duration-500 ease-in-out shadow-lg border-2 border-blue-700 hover:shadow-2xl bg-white/95",
              "hover:border-blue-500",
              isFeatured && "ring-2 ring-blue-600 shadow-2xl transform md:scale-[1.03] hover:scale-[1.05]"
            )}
          >
            <CardHeader className="p-6 pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-black">{plan.name}</CardTitle>
                {plan.badge && (
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-600 text-white rounded-full">
                    {plan.badge}
                  </span>
                )}
              </div>
              <CardDescription className="mt-2 text-black">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-0">
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-black">${currentPrice}</span>
                  <span className="text-muted-foreground ml-2 text-black">{priceSuffix}</span>
                </div>
                {billingCycle === 'annually' && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Equivalent to ${(plan.priceAnnually / 12).toFixed(2)}/mo
                  </p>
                )}
              </div>

              <ul className="space-y-1">
                {plan.features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} />
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0 mt-auto">
              <ShinyButton
                className="w-full"
                onClick={() => onPlanSelect(plan.id, billingCycle)}
              >
                Agendar Demonstração
              </ShinyButton>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );

  // --- 3.3. Feature Comparison Table (Optional) ---
  const ComparisonTable = (
    <div className="mt-16 border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-6 py-4 text-left font-semibold">Feature</th>
            {plans.map(plan => (
              <th key={plan.id} className="px-6 py-4 text-center font-semibold">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((featureName, rowIndex) => (
            <tr key={featureName} className={cn("border-b", rowIndex % 2 === 0 ? "bg-background" : "bg-muted/30")}>
              <td className="px-6 py-4 font-medium">{featureName}</td>
              {plans.map(plan => {
                const feature = plan.features.find(f => f.name === featureName);
                return (
                  <td key={plan.id} className="px-6 py-4 text-center">
                    {feature ? (
                      feature.isIncluded ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section
      className={cn("font-sans container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white/20 backdrop-blur-xl rounded-3xl", className)}
      style={{ fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif' }}
      {...props}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Pricing Plans</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Choose the plan that works best for you and your team
        </p>
      </div>

      {CycleToggle}
      {PricingCards}
      {ComparisonTable}
    </section>
  );
};

export { PricingComponent, type PriceTier, type Feature, type BillingCycle };
