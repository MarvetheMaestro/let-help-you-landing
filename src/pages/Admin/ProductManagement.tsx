import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';
import { Plus, Trash2, Edit2, X } from 'lucide-react';
import { products as staticProducts, Product } from '@/data/products';

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    category: 'Minimalist',
    image: '',
    description: '',
    sizes: ['S', 'M', 'L']
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // In a real app, you'd fetch from Supabase
      // const { data, error } = await supabase.from('products').select('*');
      // For now, we use static data and mock the CRUD
      setProducts(staticProducts);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        setProducts(products.map(p => p.id === currentProduct.id ? (currentProduct as Product) : p));
        toast.success('Product updated successfully');
      } else {
        const newProduct = { ...currentProduct, id: Math.random().toString(36).substr(2, 9) } as Product;
        setProducts([...products, newProduct]);
        toast.success('Product added successfully');
      }
      resetForm();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success('Product deleted');
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const resetForm = () => {
    setCurrentProduct({
      name: '',
      price: 0,
      category: 'Minimalist',
      image: '',
      description: '',
      sizes: ['S', 'M', 'L']
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {isEditing ? 'Edit Product' : 'Add New Product'}
                {isEditing && (
                  <Button variant="ghost" size="icon" onClick={resetForm}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input 
                    value={currentProduct.name} 
                    onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Price ($)</Label>
                  <Input 
                    type="number"
                    value={currentProduct.price} 
                    onChange={e => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <select 
                    className="w-full h-10 px-3 rounded-md border border-zinc-200 bg-white"
                    value={currentProduct.category}
                    onChange={e => setCurrentProduct({...currentProduct, category: e.target.value as any})}
                  >
                    <option value="Streetwear">Streetwear</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Minimalist">Minimalist</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input 
                    value={currentProduct.image} 
                    onChange={e => setCurrentProduct({...currentProduct, image: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea 
                    value={currentProduct.description} 
                    onChange={e => setCurrentProduct({...currentProduct, description: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-black hover:bg-zinc-800 text-white">
                  {isEditing ? 'Update Product' : 'Add Product'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* List Section */}
        <div className="w-full md:w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>Product List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDelete(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}