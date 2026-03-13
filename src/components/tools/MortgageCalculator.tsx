"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(1400000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate mortgage details
  const downPaymentAmount = homePrice * (downPayment / 100);
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  const monthlyPayment =
    loanAmount *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  // Estimated property tax (1.2% annually in Las Vegas)
  const annualPropertyTax = homePrice * 0.012;
  const monthlyPropertyTax = annualPropertyTax / 12;

  // Estimated home insurance ($1,500 annually average)
  const monthlyInsurance = 1500 / 12;

  // Estimated HOA (if applicable)
  const monthlyHOA = 0;

  const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyInsurance + monthlyHOA;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="luxury-gradient p-8 text-white">
        <div className="flex items-center mb-4">
          <Calculator className="w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold font-serif">Mortgage Calculator</h2>
        </div>
        <p className="text-white/90">
          Calculate your estimated monthly mortgage payment
        </p>
      </div>

      <div className="p-8">
        {/* Input Fields */}
        <div className="space-y-6 mb-8">
          {/* Home Price */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <DollarSign className="w-4 h-4 mr-1 text-luxury-gold" />
              Home Price
            </label>
            <input
              type="range"
              min="200000"
              max="5000000"
              step="50000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full h-2 bg-luxury-gold/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
            />
            <div className="flex justify-between items-center mt-2">
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="text-2xl font-bold text-luxury-gold bg-transparent border-b-2 border-luxury-gold/30 focus:border-luxury-gold outline-none w-48"
              />
              <span className="text-sm text-gray-500">$200K - $5M</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <Percent className="w-4 h-4 mr-1 text-luxury-gold" />
              Down Payment
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-luxury-gold/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
            />
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="text-2xl font-bold text-luxury-gold bg-transparent border-b-2 border-luxury-gold/30 focus:border-luxury-gold outline-none w-20"
                />
                <span className="text-gray-600">({formatCurrency(downPaymentAmount)})</span>
              </div>
              <span className="text-sm text-gray-500">0% - 50%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <Percent className="w-4 h-4 mr-1 text-luxury-gold" />
              Interest Rate
            </label>
            <input
              type="range"
              min="3"
              max="10"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-luxury-gold/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
            />
            <div className="flex justify-between items-center mt-2">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                step="0.1"
                className="text-2xl font-bold text-luxury-gold bg-transparent border-b-2 border-luxury-gold/30 focus:border-luxury-gold outline-none w-24"
              />
              <span className="text-sm text-gray-500">3% - 10%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="flex items-center text-sm font-semibold text-luxury-black mb-2">
              <Calendar className="w-4 h-4 mr-1 text-luxury-gold" />
              Loan Term
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setLoanTerm(15)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                  loanTerm === 15
                    ? "luxury-gradient text-white"
                    : "bg-luxury-gray-light text-luxury-black hover:bg-luxury-gold/10"
                }`}
              >
                15 Years
              </button>
              <button
                onClick={() => setLoanTerm(30)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                  loanTerm === 30
                    ? "luxury-gradient text-white"
                    : "bg-luxury-gray-light text-luxury-black hover:bg-luxury-gold/10"
                }`}
              >
                30 Years
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-luxury-gray-light rounded-2xl p-8">
          <h3 className="text-xl font-bold text-luxury-black mb-6 font-serif">
            Monthly Payment Breakdown
          </h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-3 border-b border-luxury-black/10">
              <span className="text-gray-600">Principal & Interest</span>
              <span className="text-xl font-bold text-luxury-black">
                {formatCurrency(monthlyPayment)}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-luxury-black/10">
              <span className="text-gray-600">Property Tax (est.)</span>
              <span className="text-xl font-bold text-luxury-black">
                {formatCurrency(monthlyPropertyTax)}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-luxury-black/10">
              <span className="text-gray-600">Home Insurance (est.)</span>
              <span className="text-xl font-bold text-luxury-black">
                {formatCurrency(monthlyInsurance)}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-luxury-gold/30">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-luxury-black">
                Total Monthly Payment
              </span>
              <span className="text-3xl font-bold text-luxury-gold">
                {formatCurrency(totalMonthlyPayment)}
              </span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">Total Interest</div>
              <div className="text-lg font-bold text-luxury-black">
                {formatCurrency(totalInterest)}
              </div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">Total Paid</div>
              <div className="text-lg font-bold text-luxury-black">
                {formatCurrency(totalPayment + downPaymentAmount)}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          * This is an estimate. Your actual payment may differ. Property tax based on 1.2% annually.
          Contact Pay for a personalized consultation.
        </p>
      </div>
    </div>
  );
}
