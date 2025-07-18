import React, { useState } from 'react';
import { Heart, CreditCard, DollarSign, History, Check } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { mockDonations } from '../data/mockData';

export const Donations: React.FC = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [5, 10, 25, 50, 100];

  const handleDonation = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setShowDonationModal(false);
    setSelectedAmount(null);
    setCustomAmount('');
    
    // Show success message (you could implement a toast notification here)
    alert('¡Gracias por tu donación! Tu apoyo es muy importante para nosotros.');
  };

  const totalDonated = mockDonations
    .filter(donation => donation.status === 'completed')
    .reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="h-8 w-8 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-primary-800 mb-4">
          Apoya a TeleTeach
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tu donación nos ayuda a mantener la plataforma gratuita y seguir 
          desarrollando contenido educativo de calidad para todos los docentes.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            ${totalDonated}
          </h3>
          <p className="text-gray-600">Total Donado</p>
        </Card>

        <Card className="text-center">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            {mockDonations.length}
          </h3>
          <p className="text-gray-600">Donaciones Realizadas</p>
        </Card>

        <Card className="text-center">
          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            500+
          </h3>
          <p className="text-gray-600">Docentes Beneficiados</p>
        </Card>
      </div>

      {/* Donation Section */}
      <Card>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            Haz una Donación
          </h2>
          <p className="text-gray-600">
            Cada donación nos acerca más a nuestro objetivo de democratizar 
            la educación digital
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setShowDonationModal(true)}
              className="bg-primary-50 hover:bg-primary-100 text-primary-800 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 border-2 border-transparent hover:border-primary-200"
            >
              ${amount}
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setShowDonationModal(true)}
            className="px-8"
          >
            <Heart className="mr-2 h-5 w-5" />
            Donar Cantidad Personalizada
          </Button>
        </div>
      </Card>

      {/* How Your Donation Helps */}
      <Card>
        <h2 className="text-xl font-bold text-primary-800 mb-6">
          ¿Cómo Ayuda tu Donación?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Contenido Gratuito</h3>
                <p className="text-sm text-gray-600">
                  Mantener todos los cursos accesibles sin costo para educadores
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Nuevos Cursos</h3>
                <p className="text-sm text-gray-600">
                  Desarrollo de contenido actualizado y nuevas plataformas
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 p-2 rounded-full mt-1">
                <Check className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Soporte Técnico</h3>
                <p className="text-sm text-gray-600">
                  Mantener la plataforma funcionando y mejorar la experiencia
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 p-2 rounded-full mt-1">
                <Check className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Certificaciones</h3>
                <p className="text-sm text-gray-600">
                  Ofrecer certificados oficiales y reconocimientos
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Donation History */}
      <Card>
        <div className="flex items-center space-x-2 mb-6">
          <History className="h-5 w-5 text-gray-600" />
          <h2 className="text-xl font-bold text-primary-800">
            Historial de Donaciones
          </h2>
        </div>

        {mockDonations.length > 0 ? (
          <div className="space-y-4">
            {mockDonations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    donation.status === 'completed' ? 'bg-green-500' :
                    donation.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      ${donation.amount} {donation.currency}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(donation.date).toLocaleDateString()} • {donation.paymentMethod}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    donation.status === 'completed' ? 'bg-green-100 text-green-800' :
                    donation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {donation.status === 'completed' ? 'Completado' :
                     donation.status === 'pending' ? 'Pendiente' : 'Fallido'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <History className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No hay donaciones registradas</p>
          </div>
        )}
      </Card>

      {/* Donation Modal */}
      <Modal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        title="Realizar Donación"
        maxWidth="lg"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Selecciona el monto
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    selectedAmount === amount
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <Input
              type="number"
              placeholder="Cantidad personalizada"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Método de pago
            </h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <CreditCard className="h-5 w-5 mr-2 text-gray-400" />
                <span>Tarjeta de Crédito/Débito</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <span className="ml-7">PayPal</span>
              </label>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-2xl font-bold text-primary-800">
                ${selectedAmount || customAmount || 0}
              </span>
            </div>
            
            <div className="flex space-x-4">
              <Button
                onClick={handleDonation}
                isLoading={isProcessing}
                disabled={!selectedAmount && !customAmount}
                className="flex-1"
              >
                {isProcessing ? 'Procesando...' : 'Donar Ahora'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowDonationModal(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};