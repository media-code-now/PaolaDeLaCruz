"use client";

import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Calculator,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ModernMortgageCalculator() {
  const [homePrice, setHomePrice] = useState(12500000);
  const [downPayment, setDownPayment] = useState(2500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [showBreakdown, setShowBreakdown] = useState(true);

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  const propertyTax = homePrice * 0.011 / 12; // ~1.1% annual
  const homeInsurance = homePrice * 0.0035 / 12; // ~0.35% annual
  const hoaFees = 500; // Monthly HOA
  const totalMonthly = monthlyPayment + propertyTax + homeInsurance + hoaFees;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(0);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-luxury-black mb-2 font-serif">
            Mortgage Calculator
          </h2>
          <p className="text-gray-600">Calculate your monthly payment</p>
        </div>
        <div className="w-14 h-14 luxury-gradient rounded-2xl flex items-center justify-center">
          <Calculator className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Monthly Payment Display */}
      <div className="bg-gradient-to-br from-luxury-gold to-amber-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/90 font-medium">Estimated Monthly Payment</span>
          <DollarSign className="w-5 h-5 text-white/90" />
        </div>
        <div className="text-5xl font-bold mb-1">
          {formatCurrency(totalMonthly)}
        </div>
        <div className="text-white/90 text-sm">
          Principal & Interest: {formatCurrency(monthlyPayment)}
        </div>
      </div>

      {/* Input Sliders */}
      <div className="space-y-6 mb-8">
        {/* Home Price */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">Home Price</label>
            <input
              type="text"
              value={formatCurrency(homePrice)}
              onChange={(e) => {
                const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(value)) setHomePrice(value);
              }}
              className="w-40 px-3 py-2 border-2 border-gray-200 rounded-lg text-right font-bold text-luxury-gold focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
            />
          </div>
          <input
            type="range"
            min="1000000"
            max="50000000"
            step="100000"
            value={homePrice}
            onChange={(e) => setHomePrice(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
          />
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">
              Down Payment ({downPaymentPercent}%)
            </label>
            <input
              type="text"
              value={formatCurrency(downPayment)}
              onChange={(e) => {
                const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(value) && value <= homePrice) setDownPayment(value);
              }}
              className="w-40 px-3 py-2 border-2 border-gray-200 rounded-lg text-right font-bold text-luxury-gold focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
            />
          </div>
          <input
            type="range"
            min="0"
            max={homePrice}
            step="10000"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">Interest Rate</label>
            <input
              type="text"
              value={`${interestRate.toFixed(2)}%`}
              onChange={(e) => {
                const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ""));
                if (!isNaN(value)) setInterestRate(value);
              }}
              className="w-40 px-3 py-2 border-2 border-gray-200 rounded-lg text-right font-bold text-luxury-gold focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
            />
          </div>
          <input
            type="range"
            min="2"
            max="12"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
          />
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">Loan Term</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg font-bold text-luxury-gold focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none bg-white pr-10"
            >
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Breakdown Toggle */}
      <button
        onClick={() => setShowBreakdown(!showBreakdown)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors mb-6"
      >
        <span className="font-semibold text-gray-700">Payment Breakdown</span>
        {showBreakdown ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Payment Breakdown */}
      {showBreakdown && (
        <div className="space-y-3 mb-8 animate-fade-in">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <span className="text-gray-700">Principal & Interest</span>
            <span className="font-bold text-luxury-black">
              {formatCurrency(monthlyPayment)}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <span className="text-gray-700">Property Tax</span>
            <span className="font-bold text-luxury-black">
              {formatCurrency(propertyTax)}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <span className="text-gray-700">Home Insurance</span>
            <span className="font-bold text-luxury-black">
              {formatCurrency(homeInsurance)}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <span className="text-gray-700">HOA Fees</span>
            <span className="font-bold text-luxury-black">
              {formatCurrency(hoaFees)}
            </span>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Total Interest</span>
          </div>
          <div className="text-xl font-bold text-luxury-gold">
            {formatCurrency(totalInterest)}
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Total Payment</span>
          </div>
          <div className="text-xl font-bold text-luxury-gold">
            {formatCurrency(totalPayment + downPayment)}
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full mt-6 py-4 luxury-gradient text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
        Get Pre-Approved
      </button>
    </div>
  );
}
