<template>
  <article>
    <p>
      The HTTP hydration parameter pattern is used for when you want "extra" data on one of your objects, but don't always need that data.
      You may have an API that returns an InventoryItem that is tied with its related Suppliers. You could configure your API method to optionally return
      that Suppliers with the InventoryItem.
    </p>
    <prism language="csharp" :code="codeSnippet1" />
    <p>
      This is a classic <pre class="inline">GET</pre> request to get an employer. Notice how we are also populating
      the returned <pre class="inline">Employer</pre> with its children <pre class="inline">Employee</pre>s. Now,
      consider this next example.
    </p>
    <prism language="csharp" :code="codeSnippet2" />
    <p>
      Now, we are only populating employees if the consumer passes in a <pre class="inline">hydrate</pre>
      parameter equal to true. This allows us to reduce the complexity of the data returned and sometimes
      speed up your API if these relationships contain large amounts of data.
    </p>
    <h2 class="subtitle">
      Benefits of this Pattern
    </h2>
    <p>
      The benefit of this pattern is efficiency. An <pre class="inline">Employer</pre> with large amounts of
      children <pre class="inline">Employee</pre> objects would take longer to get if you needed to populate
      them every time.
    </p>
    <p>
      If you aren't convinced, consider a cron job that needs thousands of <pre class="inline">Employer</pre>
      objects. If that job doesn't need <pre class="inline">Employee</pre>s, the job is going to take longer
      to run. All because the first example assumed the consumer always wanted a fully hydrated object!
    </p>
    <h2 class="subtitle">
      Defining "extra" data
    </h2>
    <p>
      In my opinion, the data that you should omit if <pre class="inline">hydrate=false</pre> is any data that
      you do NOT need for an <pre class="inline">UPDATE</pre> operation. At a bare minimum we need to provide
      our API consumers with sufficient data on a <pre class="inline">GET</pre> operation to support an
      <pre class="inline">UPDATE</pre>, otherwise they can accidentally override data will null values. Let's
      talk about how to separate these concerns using the <router-link :to="'/blog/' + csharpInfoPatternUrl">info pattern</router-link>
    </p>
    <label for="employer-snippet"><strong>EmployerInfo.cs</strong></label>
    <prism name="employer-snippet" :code="codeSnippet3" language="csharp" />
    <p>
      The <pre class="inline">EmployerInfo</pre> class contains all <strong>updatable</strong> properties. These
      are properties that the consumer can manipulate on add or update.
    </p>
    <label for="employer-snippet"><strong>Employer.cs</strong></label>
    <prism name="employer-snippet" :code="codeSnippet4" language="csharp" />
    <p>
      The <pre class="inline">Employer</pre> class contains all <strong>not updatable</strong> properties. Properties
      that are eventually translated to primary keys belong here. Some entity relationships may also live in here.
    </p>
    <p>
      Since an employer in our database has thousands of employees <pre class="inline">Employees</pre>, we do not want
      populate them for every <pre class="inline">GET</pre>. Instead, we opt to populate them only when the client wishes to.
      Thus, we can define the <pre class="inline">Employees</pre> property as "extra data" in terms of our pattern.
    </p>
    <h2 class="subtitle">
      Complex Practical examples
    </h2>
    <p>
      I have used this pattern numerous times as a professional. Let's go through (near exact) examples of some
      work I have done in the past using hydrate params.
    </p>
    <strong>Multiple data fields</strong>
    <p>
      In a real life scenario, it is likely you will need to do this not just for one data fields but for several.
      Here is an example of something similar to what I coded for a content management system in the past.
    </p>
    <prism language="csharp" :code="codeSnippet5" />
    <p>
      <pre class="inline">TagIds</pre> and <pre class="inline">Logo</pre> are both required properties for an update,
      so we include those regardless of the value of <pre class="inline">hydrate</pre>.
    </p>
    <p>
      <pre class="inline">Files</pre>, <pre class="inline">Leads</pre> and <pre class="inline">Tools</pre> are all
      not required for an update but are important fields on a piece.
    </p>
    <p>
      On each <pre class="inline">File</pre> we hydrate even more data. We grab the children
      <pre class="inline">Preview</pre> entities for each file. This is a great example of how hydrate can really make
      your API more efficient.
    </p>
    <h2 class="subtitle">
      Final thoughts
    </h2>
    <p>
      Hydration parameters are something I hope to see more of. All too many times I see APIs bringing back large amounts
      of data that I never use as a consumer. I wouldn't be opposed to using two or three hydration parameters for
      specific sectors of data either! You could have a parameter in my previous example named
      <pre class="inline">hydrateTools</pre> and another named <pre class="inline">hydrateFiles</pre>. The most important
      part is we are being efficient.
    </p>
    <p>
      Next time you are returning objects with children entities in your APIs, consider using this pattern.
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get codeSnippet1 () {
    return `[HttpGet("{id}")]
[ProducesResponseType(typeof(Employer), StatusCodes.Status200OK)]
[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
public async Task<IActionResult> GetEmployer([FromRoute]int id)
{
    var employer = await DataAccessor.Employers.GetAsync(id);
    employer.Employees = await DataAccessor.Employees.GetChildrenAsync(employer.Id);
    
    return Ok(employer);
}`
  }

  get codeSnippet2 () {
    return `[HttpGet("{id}")]
[ProducesResponseType(typeof(Employer), StatusCodes.Status200OK)]
[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
public async Task<IActionResult> GetEmployer([FromRoute]int id, [FromQuery]bool hydrate = false)
{
    var employer = await DataAccessor.Employers.GetAsync(id);
    if (hydrate)
    {
        employer.Employees = await DataAccessor.Employees.GetChildrenAsync(employer.Id);
    }

    return Ok(employer);
}`
  }

  get codeSnippet3 () {
    return `namespace LanthierCodes.Employer.Models
{
    public class EmployerInfo
    {
        public string Name { get; set; }

        public string Contact { get; set; }
    }
}
`
  }

  get codeSnippet4 () {
    return `namespace LanthierCodes.Employer.Models
{
    using System.Collections.Generic;

    public class Employer : EmployerInfo
    {
        public int Id { get; set; }

        public List<Employee> Employees { get; set; } // Our "extra" data we don't always need to return
    }
}`
  }

  get codeSnippet5 () {
    return `[HttpGet("{id}")]
[ProducesResponseType(typeof(ContentItem), StatusCodes.Status200OK)]
[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
public async Task<IActionResult> GetContent(
    [FromRoute]int id, [FromQuery]bool hydrate = false)
{
    var content = await DataAccessor.Content.GetAsync(id);

    if (content == null)
    {
        return NotFound($"Content {id} not found.");
    }

    //We need these for an UPDATE operation, so populate them no matter what
    content.TagIds = (await DataAccessor.ContentTags.GetAsync(content.Id))?.Select(ct => ct.TagId); 
    content.Logo = (await DataAccessor.ContentLogos.GetChildrenAsync(content.Id))?.FirstOrDefault();

    //Anything we don't need for UPDATE can go here
    if (hydrate)
    {
        content.Files = await DataAccessor.ContentFiles.GetChildrenAsync(content.Id);
        content.Leads = await DataAccessor.Leads.GetChildrenAsync(content.Id);
        content.Tools = await DataAccessor.Tools.GetChildrenAsync(content.Id);

        //Populate even more data! Children of children of our base entity
        foreach(var file in content.Files)
        {
            file.Previews = await DataAccessor.FilePreviews.GetChildrenAsync(file.Id);
        }
    }

    return Ok(content);
}`
  }
}
</script>
<style lang="scss" scoped>
</style>
