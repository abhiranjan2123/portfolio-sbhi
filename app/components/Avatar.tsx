import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarPhoto = () => {
  return (
    <div className="flex justify-center mt-30">
   <Avatar className="w-40 h-40 ring-slate-100 ring">
      <AvatarImage src="https://ik.imagekit.io/5lnqg1qxwh/Myimage.JPG?updatedAt=1738137839270" />
      <AvatarFallback>ARG</AvatarFallback>
    </Avatar>
    </div>
 
  );
};

export default AvatarPhoto;
