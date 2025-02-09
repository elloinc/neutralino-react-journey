
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface TokenFormData {
  tokenName: string;
  tokenSymbol: string;
  supply: string;
}

const BundlerForm = () => {
  const { mode } = useParams();
  const navigate = useNavigate();
  const form = useForm<TokenFormData>();

  const onSubmit = (data: TokenFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back
      </Button>
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{mode}</h1>
        <p className="text-muted-foreground mb-8">Create your token using {mode}</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="tokenName">Token Name</Label>
              <Input
                id="tokenName"
                {...form.register('tokenName')}
                className="mt-1"
                placeholder="Enter token name"
              />
            </div>

            <div>
              <Label htmlFor="tokenSymbol">Token Symbol</Label>
              <Input
                id="tokenSymbol"
                {...form.register('tokenSymbol')}
                className="mt-1"
                placeholder="Enter token symbol"
              />
            </div>

            <div>
              <Label htmlFor="supply">Total Supply</Label>
              <Input
                id="supply"
                type="number"
                {...form.register('supply')}
                className="mt-1"
                placeholder="Enter total supply"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Create Token
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BundlerForm;
