module.exports = 


```<!doctype html>
        
        

<!-- Identifies the document type to the Browser -->
<!DOCTYPE html>
<!-- HTML Starting Tag -->
<html>
	<!-- How to treat the Screen and characters  -->
    <head>
    	<!-- What characterset to use, important for language translation -->
        <meta charset="utf-8">

        <!-- Google Adwords -->
        <meta name="description" content="Demo Project">

        <!-- Mobile Device Starting parameters -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Tab Text -->
        <title>HTML Class</title>

	</head>
	<!-- Our actual screen output that the user sees -->
	<body>
	
	<!-- HTML 5 Section Specific header -->
	<!-- Basically a Div but better for readability -->
	<header>
		<h1>This is within a Header Tag</h1>
	</header>

	<!-- Divider to break up the page in to sections, handles for CSS/Javascript -->
	<!-- Organizationally for entire parts that we want to treat the same we use <section> -->
	<!-- Divs are then used inside sections -->

	<!-- Major Parts are Header, Section, Aside, Footer -->
	<section>
		<!-- Headings -->	
		<h1>Heading Type One</h1>
		<h2>Heading Type Two</h2>
		<h3>Heading Type Three</h3>
		<h4>Heading Type Four</h4>
		<h5>Heading Type Five</h5>
		<h6>Heading Type Six</h6>
	</section>

	<section>
		<h2>Sections and page layouts</h2>
		<div>
			<h6>Tags</h6>
			<p>
				Text of this style, comes by default under the &lt;p&gt; tag.<br><br>Each tag used in HTML has default properties that that browser will use to display the contents within the element.
				<br>
				An element is a tag, ie, header, section, div, h1, h2, h3, p, br, hr, a, strong, em and many more.
				<br>
				99% of tags need an opening and closing tag.  Some exceptions to that are input, br, and hr.
			</p>
		</div>
		<div>
			<h1>Opening and closing tags</h1>
			<p>
				<strong>&lt;element&gt;</strong>Content is what is between the opening and closing element tag<strong>&lt;/element&gt;</strong></p>
		</div>
		<div>
			<h5>Lorem Ipsum</h5>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum atque, ipsum quis voluptate quibusdam ad earum illo impedit, harum omnis quaerat aperiam quo, expedita fuga hic in quia explicabo assumenda enim. Inventore, natus reiciendis culpa magnam quae delectus maxime?
				<br><br>
				Lorem ipsum text like what you see above is generally called dummy text.  Within your IDE, you should be able to type something like 'lorem10' hit tab and get 10 randomly generated words.
				<!-- Link Tag to link to another page -->
				<!-- taget='_blank' opens to a new window -->
				Without headings, or some level of basic HTML division, reading text is really hard on a webpage.
				<br><br>
				Break tags like the one you can't see on the page but in the HTML are used to create separation.
				<hr>
				Horizontal Rule Tags create a line between the previous element and this one.
			</p>
		</div>
		<div>
			<h3>Links</h3>
			<p>
				This is all great and fine but how do I create links to all my other pages!?
				<div>
					<a href="http://google.com" target="_blank">I'm glad you asked.  This is a Link to a Website, can you guess which one?</a>
				</div>
			</p>
		</div>
	</section>
	
	<section>
		<!-- Lists -->
		<div>
			<h4>Unordered List</h4>
			<ul>
				<li>List Item</li>
				<li>List Item</li>
				<li>List Item</li>
				<li>List Item</li>
			</ul>
		</div>

		<div>
			<h4>Ordered List</h4>
			<ol>
				<li>List Item</li>
				<li>List Item</li>
				<li>List Item</li>
				<li>List Item</li>
			</ol>
		</div>
	</section>
		
	<!-- Table -->
	<section>
		<h2>Welcome to your first database!  The original!</h2>	
		<table>
			<thead>
				<tr>
					<th>Row</th>
					<th>Name</th>
					<th>Email</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Row 1</td>
					<td>John Doe</td>
					<td>johndoe@spotwerkz.co.th</td>
					<td>21</td>
				</tr>
				<tr>
					<td>Row 2</td>
					<td>Jane Doe</td>
					<td>janedoe@spotwerkz.co.th</td>
					<td>25</td>
				</tr>
					
				<tr>
					<td>Row 3</td>
					<td>Joan Doe</td>
					<td>joandoe@spotwerkz.co.th</td>
					<td>34</td>
				</tr>
			</tbody>
		</table>
	</section>
	<br>
	<hr>
	<br>
	
		<!-- Forms -->
	<section>
		<h2>Forms</h2>
		<form action="thankyou.html">
			<div>
				<label>First Name</label>
				<input type="text" name="firstName" placeholder="Enter your first name">
			</div>
			<br>
			<div>
				<label>Last Name</label>
				<input type="text" name="lastName" placeholder="Enter your Last Name">
			</div>
			<br>
			<div>
				<label>Email</label>
				<input type="email" name="email">
			</div>
			<div>
				<label>Age</label>
				<input type="number" name="age">
			</div>
			<br>
			<div>
				<label>Birthday:</label>
				<input type="date" name="birthday">
			</div>
			<div>
				<label>Message</label>
				<textarea name="message"></textarea>
			</div>
			<br>
			<div>
				<label>Gender</label>
				<select name="gender">
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
			</div>
			<br>
			<input type="submit" name="submit" value="I am an Input Type">

			<button type="submit">I am a button</button>
		</form>
	</section>
<hr>
	<!-- Image -->
	<section>
		<div>
			<img src="https://source.unsplash.com/random/200x200" alt="My Sample Image" width="200">
		</div>
		<br>
		<hr>
		<div>
			<img src="https://source.unsplash.com/random/201x200" alt="My Sample Image" width="200">
		</div>
		<br>
		<hr>
		<div>
			<img src="https://source.unsplash.com/random/202x200" alt="My Sample Image" width="200">
		</div>
		<br>
		<hr>
		<div>
			<img src="https://source.unsplash.com/random/203x200" alt="My Sample Image" width="200">
		</div>
	</section>

		<!-- Quotations -->
	<section>
		<p>This text is outside the blockquote</p>
		<blockquote cite="https://www.spotwerkz.co.th">
			This text is inside the block quote.  Most browsers will automatically indent content inside of a blockquote tag.
		</blockquote>
	</section>
	<footer>SpotWerkz &copy; 2020</footer>
	</body>
</html>```