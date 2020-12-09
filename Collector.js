class Collector
{

constructor(x,y,w,h)
{
   this.box=Bodies.rectangle(x,y,w,h,{isStatic:false})
   World.add(world,this.box)

}
  


display()
{
   pos=this.bodies.position;
   Engine.update(engine)
   push();

   rect(pos.x,pos.y,this.bodies.width,this.bodies.height)


    pop();
}


}






