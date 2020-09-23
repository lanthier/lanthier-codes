<template>
  <article>
    <p>
      If you are passing your Web API controller create methods objects that have an ID on them, you should rethink your strategy.
    </p>
    <p>
      Have you ever dealt with a C# model in a class project or at work and didn't fully populate the object's properties?
      Perhaps you are creating a new instance of an object that has extra properties on it for relational purposes. Or your object has an Id integer on it that represents its
      primary key in a database (very common). Take this class for example:
    </p>
    <prism language="csharp" :code="codeSnippet1" />
    <p>
      Our <b>Pet</b> object has three properties: <b>Id</b>, <b>Name</b> and <b>Age</b>. The <b>Name</b> and <b>Age</b> property are both useful for creating a Pet, however
      the Id property is useless. How would we utilize this class as it stands for creation?
    </p>
    <prism language="csharp" :code="codeSnippet2" />
    <p>
      Of course I did not actually need to put anything on the object at all, but it exists as a useless property if our API is RESTful. Furthermore, in my opinion, it implies that giving the
      object an Id will actually have some meaningful affect in the API when it doesn't/shouldn't. How do we remedy this? Take a look:
    </p>
    <prism language="csharp" :code="codeSnippet3" />
    <p>
      Our <b>PetInformation</b> class will now hold any information we want to use for creates and updates! When we want to GET, we can return the <b>Pet</b> class with all of the information
      still on it, including its Id! Let's take a look at an example Web API Interface that utilizes this pattern and also show an example of how we might utilize it.
    </p>
    <b>Interface:</b>
    <prism language="csharp" :code="codeSnippet4" />
    <b>Example usage:</b>
    <prism language="csharp" :code="codeSnippet5" />
    <p>
      Notice how we no longer have any properties exposed on our object we use for the POST operation. It is best practice to follow a design pattern along these lines. We use <b>Pet</b>
      for all operations that from <em>from</em> the API <em>to</em> the consumer (GET). Then we use <b>PetInformation</b> for when we go <em>from</em> the consumer <em>to</em> the API
      (POST, PUT).
    </p>
    <div style="display: flex; justify-content: center;">
      <img src="../../assets/infoobject.png" />
    </div>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CSharpObjPattern extends Vue {
  get codeSnippet1 () {
    return `namespace LanthierCodes
{
    public class Pet
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }
    }
}`
  }

  get codeSnippet2 () {
    return `var pet = new Pet()
{
    Id = 123, //Why?
    Name = "Charlie",
    Age = 4
};

var id = PetService.PostPetAsync(pet);`
  }

  get codeSnippet3 () {
    return `namespace LanthierCodes
{
    public class Pet : PetInformation
    {
        public int Id { get; set; }
    }

    public class PetInformation
    {
        public string Name { get; set; }

        public int Age { get; set; }
    }
}`
  }

  get codeSnippet4 () {
    return `namespace LanthierCodes
{
    public interface IPetService
    {
        Task<Pet> GetPetAsync(int id);

        Task<int> PostPetAsync(PetInformation pet);

        Task PutPetAsync(int id, PetInformation pet);

        Task DeletePetAsync(int id);
    }
}`
  }

  get codeSnippet5 () {
    return `var petInfo = new PetInformation()
{
    Name = "Charlie",
    Age = 4
};
var id = await PetService.PostPetAsync(petInfo);

var pet = await PetService.GetPetAsync(id);

pet.Age++;

await PetService.PutPetAsync(id, pet);`
  }
}
</script>
