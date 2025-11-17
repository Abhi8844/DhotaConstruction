import { useState } from 'react';
import { Calculator, TrendingUp, CheckCircle } from 'lucide-react';
import { supabase, type CostEstimate } from '../lib/supabase';

export default function CostCalculator() {
  const [areaSqft, setAreaSqft] = useState<string>('');
  const [stories, setStories] = useState<string>('1');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const calculateCost = () => {
    const area = parseFloat(areaSqft);
    const numStories = parseInt(stories);

    if (isNaN(area) || area <= 0 || isNaN(numStories) || numStories <= 0) {
      return;
    }

    const baseRatePerSqft = 1800;

    let storyMultiplier = 1;
    if (numStories === 1) storyMultiplier = 1;
    else if (numStories === 2) storyMultiplier = 1.85;
    else if (numStories <= 5) storyMultiplier = 1.75 * numStories;
    else if (numStories <= 10) storyMultiplier = 1.7 * numStories;
    else storyMultiplier = 1.65 * numStories;

    let areaMultiplier = 1;
    if (area > 5000) areaMultiplier = 0.95;
    if (area > 10000) areaMultiplier = 0.92;
    if (area > 25000) areaMultiplier = 0.88;

    const totalCost = area * baseRatePerSqft * storyMultiplier * areaMultiplier;
    setEstimatedCost(totalCost);
  };

  const saveEstimate = async () => {
    if (!estimatedCost) return;

    setIsSaving(true);
    setSaveStatus('idle');

    try {
      const estimate: Omit<CostEstimate, 'id' | 'created_at'> = {
        area_sqft: parseFloat(areaSqft),
        stories: parseInt(stories),
        estimated_cost: estimatedCost,
        email: email || undefined,
        phone_number: phone || undefined,
      };

      const { error } = await supabase.from('cost_estimates').insert([estimate]);

      if (error) throw error;

      setSaveStatus('success');
      setEmail('');
      setPhone('');
      setTimeout(() => {
        setShowContact(false);
        setSaveStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error saving estimate:', error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Construction Cost Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Get an instant estimate for your construction project
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Area (Square Feet) *
                </label>
                <input
                  type="number"
                  id="area"
                  value={areaSqft}
                  onChange={(e) => setAreaSqft(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="e.g., 2000"
                  min="1"
                />
                <p className="text-xs text-gray-500 mt-1">Enter the total plot/construction area</p>
              </div>

              <div>
                <label htmlFor="stories" className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Stories/Floors *
                </label>
                <select
                  id="stories"
                  value={stories}
                  onChange={(e) => setStories(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i + 1 === 1 ? 'Story' : 'Stories'}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Select the building height</p>
              </div>
            </div>

            <button
              onClick={calculateCost}
              disabled={!areaSqft || parseFloat(areaSqft) <= 0}
              className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Calculate Estimate
              <TrendingUp className="w-5 h-5" />
            </button>

            {estimatedCost !== null && (
              <div className="mt-8 bg-white rounded-xl p-6 shadow-md border-2 border-green-500">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Estimated Construction Cost</p>
                  <p className="text-5xl font-bold text-green-600 mb-4">
                    {formatCurrency(estimatedCost)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Based on {areaSqft} sq ft, {stories} {parseInt(stories) === 1 ? 'story' : 'stories'}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Includes foundation, structure, and basic finishes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Standard quality materials and workmanship</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Actual costs may vary based on specifications</span>
                  </div>
                </div>

                {!showContact ? (
                  <button
                    onClick={() => setShowContact(true)}
                    className="w-full mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                  >
                    Save & Get Detailed Quote
                  </button>
                ) : (
                  <div className="mt-6 space-y-4 border-t pt-6">
                    <p className="text-sm font-semibold text-gray-700">
                      Get a detailed quote sent to your email/phone
                    </p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your email (optional)"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your phone number (optional)"
                    />
                    <button
                      onClick={saveEstimate}
                      disabled={isSaving || (!email && !phone)}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSaving ? 'Saving...' : 'Save Estimate'}
                    </button>

                    {saveStatus === 'success' && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
                        Estimate saved! We'll contact you shortly with a detailed quote.
                      </div>
                    )}

                    {saveStatus === 'error' && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                        Error saving estimate. Please try again.
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This is an approximate estimate. Final costs depend on location, materials,
                labor rates, design complexity, and current market conditions. Contact us for a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
