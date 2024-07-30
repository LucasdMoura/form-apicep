'use client'
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Form() {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors }, setError, clearErrors } = useForm();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setData(storedData);
    setFilteredData(storedData);
  }, []);

  const onSubmit = (formData) => {
    // Verificar se o nome ou e-mail já estão cadastrados
    const isNameExist = data.some(item => item.name.toLowerCase() === formData.name.toLowerCase());
    const isEmailExist = data.some(item => item.email.toLowerCase() === formData.email.toLowerCase());

    if (isNameExist) {
      setError("name", { type: "manual", message: "Este nome já está cadastrado" });
      return;
    }

    if (isEmailExist) {
      setError("email", { type: "manual", message: "Este e-mail já está cadastrado" });
      return;
    }

    const updatedData = [...data, formData];
    setData(updatedData);
    setFilteredData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    reset();
  };

  const handleCepBlur = async () => {
    const cep = watch("cep");
    if (cep) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
          setError("cep", { type: "manual", message: "CEP inválido" });
        } else {
          const { logradouro, bairro, localidade, uf } = response.data;
          setValue("adress", logradouro);
          setValue("neighborhood", bairro);
          setValue("city", localidade);
          setValue("region", uf);
          clearErrors("cep");
        }
      } catch (error) {
        setError("cep", { type: "manual", message: "Erro ao buscar CEP" });
      }
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm) ||
        item.cep.toLowerCase().includes(searchTerm) ||
        item.adress.toLowerCase().includes(searchTerm) ||
        item.addressNumber.toLowerCase().includes(searchTerm) ||
        item.complement.toLowerCase().includes(searchTerm) ||
        item.neighborhood.toLowerCase().includes(searchTerm) ||
        item.city.toLowerCase().includes(searchTerm) ||
        item.region.toLowerCase().includes(searchTerm)
      );
      setFilteredData(filtered);
    }
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className='px-40'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-base font-semibold leading-7 text-slate-400">Formulário de Cadastro</h2>
        <p className="mt-1 text-sm leading-6 text-slate-300">Preencha com suas informações pessoais.</p>
        
        <div className="gap-4">  
          <div className='grid space-x-4 grid-cols-2'>
            <div>
              <label htmlFor="name" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Nome</label>
              <input id="name" {...register("name", { required: true })} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.name && <span className="text-red-500">{errors.name.message || "Este campo é obrigatório"}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">E-mail</label>
              <input id="email" {...register("email", { 
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de e-mail inválido"
                }
              })} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.email && <span className="text-red-500">{errors.email.message || "Este campo é obrigatório"}</span>}
            </div>
          </div>

          <div className='grid space-x-4 grid-cols-2'>
            <div>
              <label htmlFor="cep" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Cep</label>
              <input id="cep" {...register("cep", { required: true })} onBlur={handleCepBlur} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.cep && <span className="text-red-500">{errors.cep.message || "Este campo é obrigatório"}</span>}
            </div>

            <div>
              <label htmlFor="adress" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Endereço</label>
              <input id="adress" {...register("adress", { required: true })} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.adress && <span className="text-red-500">Este campo é obrigatório</span>}
            </div>
          </div>
          
          <div className='grid space-x-4 grid-cols-2'>
            <div>
              <label htmlFor="addressNumber" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Número</label>
              <input id="addressNumber" {...register("addressNumber", { required: true })} 
              type="number"
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.addressNumber && <span className="text-red-500">Este campo é obrigatório</span>}
            </div>

            <div>
              <label htmlFor="complement" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Complemento</label>
              <input id="complement" {...register("complement")} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="neighborhood" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Bairro</label>
              <input id="neighborhood" {...register("neighborhood", { required: true })} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.neighborhood && <span className="text-red-500">Este campo é obrigatório</span>}
            </div>

            <div className="flex-1">
              <label htmlFor="city" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Cidade</label>
              <input id="city" {...register("city", { required: true })} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.city && <span className="text-red-500">Este campo é obrigatório</span>}
            </div>

            <div className="flex-1">
              <label htmlFor="region" className="block mb-2 mt-4 text-sm font-medium leading-4 text-slate-400">Estado</label>
              <input id="region" {...register("region", { required: true })} 
              className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.region && <span className="text-red-500">Este campo é obrigatório</span>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-6 px-50"> 
          <button 
            type="button"
            onClick={handleCancel} 
            className="text-sm font-semibold leading-6 text-slate-400">Limpar</button>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
    
      <div className="mt-8">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={searchTerm}
          onChange={handleSearch}
          className="block w-full rounded-md px-4 border-0 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5"
        />

        <div className="rounded-lg border border-gray-400 overflow-hidden"> 
            <table className="w-full border-collapse mb-0">
            <thead>
                <tr>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Nome</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">E-mail</th>
                <th className="border bg-slate-100  border-gray-400 text-black px-4 py-2">Cep</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Endereço</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Número</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Complemento</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Bairro</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Cidade</th>
                <th className="border bg-slate-100 border-gray-400 text-black px-4 py-2">Estado</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                <tr key={index}>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.name}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.email}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.cep}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.adress}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.addressNumber}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.complement}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.neighborhood}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.city}</td>
                    <td className="border border-slate-100 text-slate-400 px-4 py-2">{item.region}</td>
                </tr>
                ))}
            </tbody>
            </table>
            
        </div>
        <br/>
      </div>
    </div>
  );
}
