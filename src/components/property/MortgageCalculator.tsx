"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

interface MortgageCalculatorProps {
  price: number;
}

export default function MortgageCalculator({ price }: MortgageCalculatorProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const downPayment = (price * downPaymentPercent) / 100;
  const loanAmount = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  // Monthly payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
  const monthlyPayment =
    loanAmount *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md animate-fade-in">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-luxury-black font-serif">
          Mortgage Calculator
        </h2>
      </div>

      <div className="space-y-6">
        {/* Down Payment */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-luxury-gold" />
              <span>Down Payment</span>
            </label>
            <span className="text-lg font-bold text-luxury-black">
              {downPaymentPercent}% ({formatCurrency(downPayment)})
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
              <Percent className="w-4 h-4 text-luxury-gold" />
              <span>Interest Rate</span>
            </label>
            <span className="text-lg font-bold text-luxury-black">
              {interestRate}%
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
          />
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-luxury-gold" />
              <span>Loan Term</span>
            </label>
            <span className="text-lg font-bold text-luxury-black">
              {loanTerm} years
            </span>
          </div>
          <div className="flex space-x-3">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  loanTerm === term
                    ? "luxury-gradient text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {term} yrs
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Payment Result */}
        <div className="pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 mb-2">
            Estimated Monthly Payment
          </div>
          <div className="text-4xl font-bold text-luxury-gold mb-4">
            {formatCurrency(monthlyPayment)}
            <span className="text-lg text-gray-500">/mo</span>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
            <div>
              <div className="text-xs text-gray-600 mb-1">Loan Amount</div>
              <div className="text-lg font-bold text-gray-800">
                {formatCurrency(loanAmount)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Down Payment</div>
              <div className="text-lg font-bold text-gray-800">
                {formatCurrency(downPayment)}
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            * This calculator provides estimates only. Actual payments may vary
            based on taxes, insurance, and HOA fees.
          </p>
        </div>
      </div>
    </div>
  );
}
