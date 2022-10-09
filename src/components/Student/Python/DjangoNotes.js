import { Accordion } from "react-bootstrap";

export const DjangoNotes = () => {
  return (
    <div className="contentDiv notes">
      <h1 className='djangoSection'>Django Notes</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Django Basics</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <tbody>
                  <tr>
                    <td>Django</td>
                    <td>
                      <p>
                        Django is free and open source python based web
                        application development framework
                      </p>
                      <p>
                        Developed by a Newspaper IT team. Original development
                        was around editors in a newsroom so documentation is
                        highly detailed and thorough.
                      </p>
                      <p>
                        Requests are mapped directly to the desired code,
                        desired data and desired HTML
                      </p>
                      <p>Maintains Modularity of internal applications</p>
                      <p>
                        Used by Instagram, PBS Washington Times, Mozilla,
                        Pintrest, BitBucket
                      </p>
                      <p>
                        Tries to stay Backwards Compatible - but things change
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Built-in Features</td>
                    <td>
                      <p>Speed to deployment</p>
                      <p>Internal API to make calls easy!</p>
                      <p>Authentication BackEnds for Authentication Security</p>
                      <p>Secure Form Handling</p>
                      <p>
                        Administrative Interface manage data from the Browser
                      </p>
                      <p>Full Feature Relational Database</p>
                      <p>Elegant and clean URL's</p>
                      <p>HTML direct to backEnd Coding</p>
                      <p>User Session Management</p>
                      <p>
                        Pluggable Framework to add any other features you want!
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Terminology</td>
                    <td>
                      <p>
                        Project
                        <br />
                        Base mappings for each component application
                      </p>
                      <p>
                        Application
                        <br />
                        Deliverable to client requests
                      </p>
                      <p>
                        Any Application should be modular and plugged into any
                        project (Re-Use) with minimal configuration of the
                        underlying project
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Model View Template (MVT) Architecture</td>
                    <td>
                      <p>
                        We create a model/attributes to store/display -
                        models.py
                      </p>
                      <p>
                        Extracts data from the specific Model and send it to the
                        specific HTML Templates - views.py
                      </p>
                      <p>
                        The HTML Template presents data as we want based on on
                        the specific page the user called - Template (*.html)
                      </p>
                      <p>
                        Finally we map the user request from the URL to a View
                        to kick off the whole flow from a client perspective -
                        urls.py
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Installing Django</td>
                    <td>
                      <p>pip install django</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Django Project</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <td></td>
                    <td>Django Project Terms and Definitions</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Django Project Setup</td>
                    <td>
                      Create the Base Project Structure and setup the basic
                      application plumbing
                    </td>
                    <td>
                      <p>django-admin startproject &lt;project_name&gt;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Project Settings File</td>
                    <td>
                      <p>
                        Main file that maps all applications to all other Django
                        Resources
                      </p>
                      <p>Databases, Templates, Authentication, etc</p>
                    </td>
                    <td>
                      <p>settings.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Project URL's File</td>
                    <td>
                      <p>Maps User call to the code we want to show</p>
                    </td>
                    <td>
                      <p>urls.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Project Views File</td>
                    <td>
                      <p>
                        Calls data we want to send to HTML Template and sends
                        HTML Template to present to the User
                      </p>
                    </td>
                    <td>
                      <p>views.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Project Templates</td>
                    <td>
                      <p>
                        How we want the data to be shown once we receive it from
                        the user
                      </p>
                    </td>
                    <td>
                      <p>base.html</p>
                      <p>index.html</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Django Static Content (HTML/CSS/JS/Images)
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Static Content (CSS/JS/Images)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What is it?</td>
                    <td>
                      <p>
                        Storing, referencing and serving HTML Pages, CSS Files,
                        JS Files, Images, etc
                      </p>
                      <p>Can be for the whole project or per application</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project Setting File (settings.py)</td>
                    <td>
                      <p>
                        <u>For HTML Pages</u>
                        <br />
                        TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
                        <br />
                        TEMPLATES = [<br />
                        &emsp;{`{`}
                        <br />
                        &emsp;&emsp;'BACKEND':
                        'django.template.backends.django.DjangoTemplates',
                        <br />
                        &emsp;&emsp;'DIRS': [TEMPLATES_DIR,],
                        <br />
                        ...
                      </p>
                      <p>
                        <u>For CSS/JS</u>
                        <br />
                        STATIC_DIR = os.path.join(BASE_DIR, 'static')
                        <br />
                        STATIC_URL = '/static/'
                        <br />
                        STATICFILES_DIRS = [STATIC_DIR,
                        '&lt;app_name&gt;/static']
                        <br />
                        STATIC_ROOT = os.path.join(BASE_DIR, 'staticroot')
                      </p>
                      <p>
                        <u>For Images/Media Content</u>
                        <br />
                        MEDIA_URL = '/media/'
                        <br />
                        MEDIA_ROOT = os.path.join(BASE_DIR, 'mediaroot')
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project URL's File urls.py</td>
                    <td>
                      <p>
                        urlpatterns += static(settings.STATIC_URL,
                        document_root=settings.STATIC_ROOT)
                      </p>
                      <p>
                        urlpatterns += static(settings.MEDIA_URL,
                        document_root=settings.MEDIA_ROOT)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Django Application Setup</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Application Setup</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Django Application Setup</td>
                    <td>
                      <p>
                        Setup the Basic plumbing for the application to serve
                        content within the Project
                      </p>
                      <p>Must be done inside the project folder</p>
                    </td>
                    <td>
                      <p>django-admin startapp &lt;app_name&gt;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Application Model File</td>
                    <td>
                      <p>Data to store in our Database</p>
                    </td>
                    <td>
                      <p>models.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Application URL's File</td>
                    <td>
                      <p>Maps User call to the code we want to show</p>
                    </td>
                    <td>
                      <p>urls.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Application Views File</td>
                    <td>
                      <p>
                        Calls data we want to send to HTML Template and sends
                        HTML Template to present to the User
                      </p>
                    </td>
                    <td>
                      <p>views.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Application Forms</td>
                    <td>
                      <p>
                        If we have forms, what fields should be made available
                      </p>
                    </td>
                    <td>
                      <p>forms.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Application Templates</td>
                    <td>
                      <p>
                        How we want the data to be shown once we receive it from
                        the user
                      </p>
                    </td>
                    <td>
                      <p>_list.html</p>
                      <p>_detail.html</p>
                      <p>_create.html</p>
                      <p>_confirm_delete.html</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Application Tests</td>
                    <td>
                      <p>
                        Run automated Unit tests of our Application
                        Functionality
                      </p>
                    </td>
                    <td>
                      <p>tests.py</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Django Model's File</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Models File models.py</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Purpose</td>
                    <td>
                      <p>
                        Dictates what values we want to store in our database
                      </p>
                      <p>Add Desired attributes to store</p>
                      <p>
                        Django Framework builds database tables and columns to
                        store rows of data
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>How do I read this</td>
                    <td>
                      <p>Create a Class of our own</p>
                      <p>We add the attributes we want to store</p>
                      <p>
                        class Book(models.Model):
                        <br />
                        &emsp;title = models.CharField(max_length=200)
                        <br />
                        &emsp;author = models.CharField(max_length=200)
                        <br />
                        <br />
                        # Print the default Print Statement
                        <br />
                        &emsp;{`def __str__(self)`}:<br />
                        &emsp;&emsp;return f'{`{self.title}`} was written by{" "}
                        {`{self.author}`}'
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Common Field Types</td>
                    <td>
                      <p>BooleanField</p>
                      <p>CharField</p>
                      <p>DateField</p>
                      <p>DateTimeField</p>
                      <p>EmailField</p>
                      <p>FileField</p>
                      <p>ImageField</p>
                      <p>SlugField</p>
                      <p>TextField</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Null Attribute</td>
                    <td>
                      <p>Affects Database Entries</p>
                      <p>null=True/False</p>
                      <p>False is Default</p>
                      <p>
                        By Default if a Field is defined it is assumed that it
                        is required and the model/data cannot be saved in the
                        database without the field being populated
                      </p>
                      <p>Can be applied to every field type</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Blank Attribute</td>
                    <td>
                      <p>Affects HTML attrbute 'required'</p>
                      <p>blank=True/False</p>
                      <p>True is Default</p>
                      <p>
                        By Default if a Field is defined it is assumed that it
                        is NOT required to have HTML verification
                      </p>
                      <p>Can be applied to every field type</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Primary Key</td>
                    <td>
                      <p>Unique identifier for each row in a table</p>
                      <p>
                        Each table must have a primary key for each row, if we
                        don’t define on, one will be automatically generated
                        (django does an auto-incrementing auto-assign primary
                        key pk)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Foreign Key</td>
                    <td>
                      <p>
                        Denotes that the column coincides with a primary key of
                        another table
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Foreign Key Example</h3>
              <div className="grid-2">
                <div className="jumbotron">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Primay Key</th>
                        <th>Topic</th>
                        <th>Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>Best Fasion</td>
                        <td>2010 - 2019 Last Decades Top Fashion</td>
                      </tr>
                      <tr className="text-danger">
                        <td>2</td>
                        <td>Trends</td>
                        <td>2019 Trends in Review</td>
                      </tr>
                      <tr className="text-success">
                        <td>3</td>
                        <td>Recipes</td>
                        <td>The 10 Best Recipes of the Year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="jumbotron">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Foreign Key</th>
                        <th>Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>Wow! this is awesome</td>
                      </tr>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>This changed my life</td>
                      </tr>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>Unbelievably Amazing</td>
                      </tr>
                      <tr className="text-danger">
                        <td>2</td>
                        <td>I really need to update my wardrobe</td>
                      </tr>
                      <tr className="text-danger">
                        <td>2</td>
                        <td>Thanks for the fashion tips!</td>
                      </tr>
                      <tr className="text-success">
                        <td>3</td>
                        <td>These recipes are amazing!</td>
                      </tr>
                      <tr className="text-success">
                        <td>3</td>
                        <td>Looks like I know what I'm baking this weekend!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3>Many To Many Field Example</h3>
              <div className="grid-3">
                <div className="jumbotron">
                  <h4>Books</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Primary Key</th>
                        <th>Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Manee Mana</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Cinderella</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="jumbotron">
                  <h4>ManyToMany Table</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Primary Key Table Books</th>
                        <th>Primary Key Table Languages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr className="text-primary">
                        <td>1</td>
                        <td>3</td>
                      </tr>
                      <tr className="text-danger">
                        <td>2</td>
                        <td>2</td>
                      </tr>
                      <tr className="text-danger">
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr className="text-danger">
                        <td>2</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="jumbotron">
                  <h4>Languages</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Primary Key</th>
                        <th>Language</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Thai</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>English</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>French</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>German</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Django Views File</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Views File views.py</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>4 Main Operations of any User call</p>
                      <p>C.R.U.D.</p>
                    </td>
                    <td>
                      <p>
                        Create
                        <br />
                        POST Data
                        <br />
                        CreateView
                      </p>
                      <p>
                        Retrieve
                        <br />
                        GET Data
                        <br />
                        ListView
                        <br />
                        DetailView
                      </p>
                      <p>
                        Update
                        <br />
                        PUT Data
                        <br />
                        UpdateView
                      </p>
                      <p>
                        Delete
                        <br />
                        DELETE Data
                        <br />
                        DeleteView
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Function Based Views</td>
                    <td>
                      <p>Most Flexible way to create a Custom Method/View</p>
                      <p>No Extra Features, no extra methods or calls</p>
                      <p>Makes code harder to read and interpret</p>
                      <p>
                        Context - Dictionary of data to send to HTML Template
                      </p>
                      <p>
                        def index_view(request):
                        <br />
                        &emsp;context = {}
                        <br />
                        &emsp;return render(request, 'index.html', context)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Class Based Views</td>
                    <td>
                      <p>Easier to work with in the beginning</p>
                      <p>
                        Provide most all the necessary functions for basic Web
                        Applications
                      </p>
                      <p>Reduce lines of code, complexity and readability</p>
                      <p>Not as Flexible</p>
                      <p>Define a class, Inherit a Pre-Defined Django View</p>
                      <p>Populate the desired variables</p>
                      <p>Context Data Pre-defined</p>
                      <p>
                        class IndexTemplateView(TemplateView):
                        <br />
                        &emsp;template_name='index.html'
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>CreateView</td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class BookCreateView(CreateView):
                        <br />
                        &emsp;model = Book
                        <br />
                        &emsp;form_class = BookForm
                      </p>
                      <p>
                        Function Based View - The Scenic Route def
                        book_create_view(request, pk):
                        <br />
                        &emsp;if request.method == 'POST':
                        <br />
                        &emsp;&emsp;form = BookForm(request.POST)
                        <br />
                        &emsp;if form.is_valid():
                        <br />
                        &emsp;&emsp;book = form.save(commit=False)
                        <br />
                        &emsp;&emsp;# Optional - Do something with the book data
                        <br />
                        &emsp;&emsp;book.save()
                        <br />
                        &emsp;else:
                        <br />
                        &emsp;&emsp;form = BookForm()
                        <br />
                        &emsp;return render(request, 'accounts/signup.html',{" "}
                        {`{'form': form}`})
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Retrieve
                      <br />
                      ListView
                    </td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class BookListView(generic.ListView):
                        <br />
                        model = Book
                      </p>
                      <p>
                        Function Based View - The Scenic Route
                        <br />
                        def book_list_view(request):
                        <br />
                        &emsp;context = {`{`}
                        <br />
                        &emsp;'book_list': Book.objects.all()
                        <br />
                        &emsp;{`}`}
                        <br />
                        &emsp;return render(request, 'books/book_list.html',
                        context)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Retrieve
                      <br />
                      DetailView
                    </td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class BookDetailView(generic.DetailView):
                        <br />
                        model = Book
                      </p>
                      <p>
                        Function Based View - The Scenic Route
                        <br />
                        def book_list_view(request, pk):
                        <br />
                        &emsp;context = {`{`}
                        <br />
                        &emsp;'book_list': Book.objects.filter(pk=pk)
                        <br />
                        &emsp;{`}`}
                        <br />
                        &emsp;return render(request, 'books/book_list.html',
                        context)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>UpdateView</td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class BookUpdateView(UpdateView):
                        <br />
                        &emsp;model = Book
                        <br />
                        &emsp;form_class = BookForm
                      </p>
                      <p>
                        Function Based View - The Scenic Route def
                        book_create_view(request, pk):
                        <br />
                        &emsp;book_obj = get_object_or_404(Book, pk=pk) &emsp;if
                        request.method == 'POST':
                        <br />
                        &emsp;&emsp;form = BookForm(request.POST)
                        <br />
                        &emsp;if form.is_valid():
                        <br />
                        &emsp;&emsp;book = form.save(commit=False)
                        <br />
                        &emsp;&emsp;# Optional - Do something with the book data
                        <br />
                        &emsp;&emsp;book.save()
                        <br />
                        &emsp;else:
                        <br />
                        &emsp;&emsp;form = BookForm(initial=book_obj)
                        <br />
                        &emsp;return render(request, 'accounts/signup.html',{" "}
                        {`{'form': form}`})
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>DeleteView</td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class BookDeleteView(DeleteView):
                        <br />
                        &emsp;model = Book
                        <br />
                        &emsp;success_url = reverse_lazy('books:book_list')
                      </p>
                      <p>
                        Function Based View - The Scenic Route def
                        delete_view(request, pk):
                        <br />
                        &emsp;book_obj = get_object_or_404(Book, pk = pk)
                        <br />
                        &emsp;if request.method =="POST":
                        <br />
                        &emsp;&emsp;book_obj.delete()
                        <br />
                        &emsp;&emsp;return render(request,
                        "books/book_list.html")
                        <br />
                        &emsp;return render(request, "delete_view.html",
                        context)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Django HTML Templates</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>HTML Templates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Class Based View HTML Templates</td>
                    <td>
                      <p>
                        By Default Each Class Based view calls a specific
                        template by default
                      </p>
                      <p>Reduces configuration in the views file</p>
                      <p>The pattern is modelName_viewType.html</p>
                      <p>
                        Each view has an attribute of 'template_name' that we
                        can use to change the default
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>CreateView/UpdateView</td>
                    <td>
                      <p>book_form.html</p>
                    </td>
                  </tr>
                  <tr>
                    <td>ListView</td>
                    <td>book_list.html</td>
                  </tr>
                  <tr>
                    <td>DetailView</td>
                    <td>book_detail.html</td>
                  </tr>
                  <tr>
                    <td>DeleteView</td>
                    <td>book_confirm_delete.html</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Django URL's</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django URL's File urls.py</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Purpose</td>
                    <td>
                      <p>Map the User request to the template view</p>
                      <p>Projects Links to other Application URL's</p>
                      <p>Applications have their own URL's file</p>
                      <p>
                        Moving Application from one project to another, just
                        update the project Settings and the URL's and the new
                        Application is plugged in
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>How do I read this?</td>
                    <td>
                      <p>
                        app_name is so Django knows it's referencing the correct
                        application
                      </p>
                      <p>urlpatterns is a List</p>
                      <p>List Elements are functions</p>
                      <p>
                        Each List element is executed and matched against the
                        user request
                      </p>
                      <p>
                        If matched, Django then executes the second parameter,
                        calls the View
                      </p>
                      <p>
                        Third parameter is for the internal API to reference
                      </p>

                      <p>
                        app_name = 'firstapp'
                        <br />
                        urlpatterns = [<br />
                        path('home.html', views.HomeTemplateView.as_view(),
                        name='home')
                        <br />]
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Create URL Path</td>
                    <td>
                      <p>
                        path('create/$',views.BookCreateView.as_view(), name =
                        'book_create')
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Retrieve List URL Path</td>
                    <td>
                      <p>
                        path('list',views.BookListView.as_view(), name =
                        'book_list')
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Retrieve Detail URL Path</td>
                    <td>
                      <p>
                        re_path('detail/(?P&lt;pk&gt;\d+)',views.BookDetailView.as_view(),
                        name = 'book_detail')
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Update URL Path</td>
                    <td>
                      <p>
                        re_path('update/(?P&lt;pk&gt;\d+)',views.BookUpdateView.as_view(),
                        name = 'book_update')
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Delete URL Path</td>
                    <td>
                      <p>
                        re_path('delete/(?P&lt;pk&gt;\d+)',views.BookDeleteView.as_view(),
                        name = 'book_delete')
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Django Template Tags</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Template Tags</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What Are Template Tags</td>
                    <td>
                      <p>
                        &#123;&#123;Anything Inside of Here is a
                        Variable&#125;&#125;
                      </p>
                      <p>Displays Dynamic content delivered from Views</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Control Flows and Loops</td>
                    <td>
                      <p>
                        &#123;% if book %&#125;
                        <br />
                        &emsp;&lt;p&gt;&#123;&#123;book.title&#125;&#125;&lt;/p&gt;
                        <br />
                        &emsp;&lt;p&gt;&#123;&#123;book.author&#125;&#125;&lt;/p&gt;
                        <br />
                        &#123;% endif %&#125;
                      </p>
                      <p>
                        &#123;% for book in book_list %&#125;
                        <br />
                        &emsp;&lt;p&gt;&#123;&#123;book.title&#125;&#125;&lt;/p&gt;
                        <br />
                        &emsp;&lt;p&gt;&#123;&#123;book.author&#125;&#125;&lt;/p&gt;
                        <br />
                        &#123;% endfor %&#125;
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Django Forms</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Forms forms.py</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Purpose</td>
                    <td>
                      <p>Get user input to store in Database</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Form Creation</td>
                    <td>
                      <p>
                        ModelForm - Shortcut
                        <br />
                        class BookForm(forms.ModelForm):
                        <br />
                        &emsp;class Meta():
                        <br />
                        &emsp;&emsp;model = Book
                        <br />
                        &emsp;&emsp;fields = ['title', 'author']
                      </p>
                      <p>
                        Classic Form - Scenic Route
                        <br />
                        class BookForm(forms.Form)
                        <br />
                        title = forms.CharField()
                        <br />
                        author = forms.CharField()
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Linking Forms to Views</td>
                    <td>
                      <p>Class Based Views Example</p>
                      <p>views.py</p>
                      <p>
                        from book.forms import BookForm
                        <br />
                        <p>
                          class BookCreateView(CreateView):
                          <br />
                          &emsp;model = Book
                          <br />
                          &emsp;form_class = BookForm
                        </p>
                        <p>
                          class BookUpdateView(UpdateView):
                          <br />
                          &emsp;model = Book
                          <br />
                          &emsp;form_class = BookForm
                        </p>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Form Security (Required in Django)</td>
                    <td>
                      <p>
                        To protect from Click-Jacking or Hi-Jacked Sessions
                        Django has implemented Cross-Site Request Forgery (CSRF)
                        Protections{" "}
                      </p>
                      <p>
                        CSRF generates a session specific token that is only
                        valid between the current request and gets regenerated
                        on each subsequent request
                      </p>
                      <p>Generally applied only on POST requests</p>
                    </td>
                  </tr>
                  <tr>
                    <td>HTML Template Tags</td>
                    <td>
                      <p>
                        Request Type GET
                        <br />
                        &lt;form method="GET"&gt;
                        <br />
                        &emsp;&#123;&#123;form&#125;&#125;
                        <br />
                        &emsp;&lt;input type='submit' value='Get My Request'&gt;
                        <br />
                        &lt;/form&gt;
                      </p>
                      <p>
                        Request Type POST
                        <br />
                        &lt;form method="POST"&gt;
                        <br />
                        &emsp;&#123;% csrf_token %&#125;
                        <br />
                        &emsp;&#123;&#123;form&#125;&#125;
                        <br />
                        &emsp;&lt;input type='submit' value='Post My
                        Request'&gt;
                        <br />
                        &lt;/form&gt;
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            Adding Applications to the Project
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Adding Applications to the Project</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Why?</td>
                    <td>
                      <p>
                        Applications use the Django Project's Web Gateway to
                        deliver content
                      </p>
                      <p>
                        If Applications are not added to the Project, they will
                        not work
                      </p>
                      <p>
                        Requires only 2 Steps: Add to the
                        Settings:INSTALLED_APPS and the Project URL's file
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project Settings File</td>
                    <td>
                      <p>
                        Add the new App to the INSTALLED APP LIST
                        <br />
                        INSTALLED_APPS = [<br />
                        &emsp;'django.contrib.admin',
                        <br />
                        &emsp;'django.contrib.auth',
                        <br />
                        &emsp;'django.contrib.contenttypes',
                        <br />
                        &emsp;'django.contrib.sessions',
                        <br />
                        &emsp;'django.contrib.messages',
                        <br />
                        &emsp;'django.contrib.staticfiles',
                        <br />
                        &emsp;'firstapp',
                        <br />]
                      </p>
                      <p>
                        Add to the URL's file
                        <br />
                        urlpatterns = [<br />
                        &emsp;path('admin/', admin.site.urls),
                        <br />
                        &emsp;path('firstapp', include('firstapp.urls',
                        namespace='firstapp')),
                        <br />]
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="11">
          <Accordion.Header>Django Admin</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Admin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What is it?</td>
                    <td>
                      <p>
                        Provides a GUI command center for all applications
                        linked to the Django Project
                      </p>
                      <p>
                        Comes by Default, no configuration requiored, only
                        activation
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project Admin Activation</td>
                    <td>python manage.py createsuperuser</td>
                  </tr>
                  <tr>
                    <td>Application Admin Activation</td>
                    <td>
                      <p>Within the Application there is an admin.py file</p>
                      <p>
                        admin.py
                        <br />
                        admin.site.register(Book)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="12">
          <Accordion.Header>Django Application UI Testing</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Functional Testing (Selenium)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What is it?</td>
                    <td>
                      <p>
                        Allows testing for the Entire Application from the GUI
                        perspective
                      </p>
                      <p>
                        Can Create a Testing Purposes Database and User Accounts
                      </p>
                      <p>No impact on actual Database</p>
                      <p>Uses the Selenium Package</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Install Selenium</td>
                    <td>pip install selenium</td>
                  </tr>
                  <tr>
                    <td>Setup Basic Test</td>
                    <td>
                      <p>
                        from selenium import webdriver
                        <br />
                        from selenium.webdriver.common.keys import Keys
                        <br />
                        from django.contrib.staticfiles.testing import
                        StaticLiveServerTestCase
                        <br />
                        <br />
                        class FunctionalTesting(StaticLiveServerTestCase):
                        <br />
                        &emsp;def setUp(self):
                        <br />
                        &emsp;&emsp;self.browser = webdriver.Firefox()
                        <br />
                        &emsp;&emsp;staging_server =
                        os.environ.get('STAGING_SERVER')
                        <br />
                        &emsp;&emsp;if staging_server:
                        <br />
                        &emsp;&emsp;&emsp;self.live_server_url =
                        'http://'+staging_server
                        <br />
                        <br />
                        &emsp;def tearDown(self):
                        <br />
                        &emsp;&emsp;self.browser.quit()
                        <br />
                        class TestHomePage(FunctionalTesting):
                        <br />
                        &emsp;def test_home_page(self):
                        <br />
                        <br />
                        &emsp;&emsp;request =
                        self.browser.get(self.live_server_url)
                        <br />
                        &emsp;&emsp;self.assertEqual(request.status_code, 200)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
