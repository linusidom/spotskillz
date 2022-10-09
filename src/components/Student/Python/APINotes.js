import { Accordion } from "react-bootstrap";

export const APINotes = () => {
  return (
    <div className="contentDiv notes">
      <h1 className="apiSection">API Notes</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>API Basics</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>API (Application Programmable Interface)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>API (Application Programmable Interface)</td>
                    <td>
                      <p>SOAP (Simple Object Access Protocol) - Protocol </p>
                      <p>
                        REST (REpresentational State Transfer) - Framework or
                        Abstract Idea
                      </p>
                      <p></p>
                      <p>
                        REST is the most commonly deployed and easiest to use
                      </p>
                      <p></p>
                      <p>
                        As a Web Developer you may not care about API's, but as
                        a person who serves Data you should care about API's
                      </p>
                      <p></p>
                      <p>
                        The normal way to access data is through a website which
                        involves loading the webpage, waiting for the data,
                        seeing the data in the format that the designer wanted
                        to present it in.
                      </p>
                      <p></p>
                      <p>
                        What if I didn't want to wait?
                        <br />
                        API's are faster
                      </p>
                      <p>
                        What if I just wanted the data and I want the data in
                        the format that I like to see it?
                        <br />
                        You can do whatever you want with the data
                      </p>
                      <p></p>
                      <p>
                        The Web application is just a pretty front end to show
                        the data
                      </p>
                      <p></p>
                      <p>
                        API's give customers direct access to the raw data
                        behind the web application, the Database Data.
                      </p>
                      <p></p>
                      <p>
                        Do I need an API in a Web Application?
                        <br />
                      </p>
                      <p>
                        No, but you should think about having one and as a
                        developer understanding how it fits in your application.
                      </p>
                      <p></p>
                      <p>
                        API's can do everything your web application already
                        does but in an automated programmatic way.
                      </p>
                      <p></p>
                      <p>
                        If you have private data, API's make it easier to get
                        and change the data while keeping it all on your server.
                      </p>
                      <p>
                        Most commonly API's allows other platforms (JavaScript,
                        Ruby, C, etc) to interact with our application and data
                        such as Containers.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>API Tools</td>
                    <td>
                      <p>
                        Command Line
                        <br />
                        curl (https://curl.haxx.se/download.html)
                      </p>
                      <p>
                        GUI
                        <br />
                        PostMan (https://www.postman.com/)
                      </p>
                      <p>
                        Test Site
                        <br />
                        https://jsonplaceholder.typicode.com/
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
        <Accordion.Item eventKey="1">
          <Accordion.Header>API Calls</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <td></td>
                      <td>API Calls</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Request Data</td>
                      <td>
                        curl -v https://jsonplaceholder.typicode.com/posts
                      </td>
                      <td>
                        <p>GET/PUT/DELETE - 200 OK/404 Not Found</p>
                        <p>
                          * Connected to jsonplaceholder.typicode.com
                          (104.27.191.227) port 443 (#0)
                          <br />
                          * TLS 1.2 connection using
                          TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
                          <br />
                          * Server certificate: sni.cloudflaressl.com
                          <br />
                          * Server certificate: CloudFlare Inc ECC CA-2
                          <br />
                          * Server certificate: Baltimore CyberTrust Root
                          <br />
                          &gt; GET /posts/1 HTTP/1.1
                          <br />
                          &gt; Host: jsonplaceholder.typicode.com
                          <br />
                          &gt; User-Agent: curl/7.43.0
                          <br />
                          &gt; Accept: */*
                          <br />
                          &gt; <br />
                          &lt; HTTP/1.1 200 OK
                          <br />
                          &lt; Date: Fri, 01 May 2020 06:05:32 GMT
                          <br />
                          &lt; Content-Type: application/json; charset=utf-8
                          <br />
                          &lt; Content-Length: 292
                          <br />
                          &lt; Connection: keep-alive
                          <br />
                          {`{`}
                          <br />
                          "userId": 1,
                          <br />
                          "id": 1,
                          <br />
                          "title": "sunt aut facere repellat provident occaecati
                          excepturi optio reprehenderit",
                          <br />
                          "body": "quia et suscipit\nsuscipit recusandae
                          consequuntur expedita et cum\nreprehenderit molestiae
                          ut ut quas totam\nnostrum rerum est autem sunt rem
                          eveniet architecto"
                          <br />
                          * Connection #0 to host jsonplaceholder.typicode.com
                          left intact
                          <br />
                          {`}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Data</td>
                      <td>
                        curl -v -d @sample.json
                        https://jsonplaceholder.typicode.com/posts
                      </td>
                      <td>
                        <p>POST/CREATE - 201 created</p>
                        <p>
                          * Trying 104.27.190.227...
                          <br />
                          * Connected to jsonplaceholder.typicode.com
                          (104.27.190.227) port 443 (#0)
                          <br />
                          * TLS 1.2 connection using
                          TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
                          <br />
                          * Server certificate: sni.cloudflaressl.com
                          <br />
                          * Server certificate: CloudFlare Inc ECC CA-2
                          <br />
                          * Server certificate: Baltimore CyberTrust Root
                          <br />
                          &gt; POST /posts HTTP/1.1
                          <br />
                          &gt; Host: jsonplaceholder.typicode.com
                          <br />
                          &gt; User-Agent: curl/7.43.0
                          <br />
                          &gt; Accept: */*
                          <br />
                          &gt; Content-Length: 531
                          <br />
                          &gt; Content-Type: application/x-www-form-urlencoded
                          <br />
                          &gt; <br />
                          * upload completely sent off: 531 out of 531 bytes
                          <br />
                          &lt; HTTP/1.1 201 Created
                          <br />
                          &lt; Date: Fri, 01 May 2020 05:06:44 GMT
                          <br />
                          &lt; Content-Type: application/json; charset=utf-8
                          <br />
                          &lt; Content-Length: 620
                          <br />
                          &lt; Connection: keep-alive
                          <br />
                          {`{`}
                          <br />"{`{`}
                          <br />
                          "id": 1,
                          <br />
                          "name": "Leanne Graham",
                          <br />
                          "username": "Bret",
                          <br />
                          "email": "Sincere@april.biz",
                          <br />
                          "address": {`{`} <br />
                          "street": "Kulas Light", <br />
                          "suite": "Apt. 556", <br />
                          "city": "Gwenborough", <br />
                          "zipcode": "92998-3874", <br />
                          "geo": {`{`} <br />
                          "lat": "-37.3159", <br />
                          "lng": "81.1496" {`}    }`},<br />
                          "phone": "1-770-736-8031 x56442",
                          <br />
                          "website": "hildegard.org",
                          <br />
                          "company": {`{`} <br />
                          "name": "Romaguera-Crona", <br />
                          "catchPhrase": "Multi-layered client-server
                          neural-net", <br />
                          "bs": "harness real-time e-markets" {`}  }`}": "",
                          <br />
                          "id": 101
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Django Rest Framework</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Rest Framework</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What is it?</td>
                    <td>
                      <p>https://www.django-rest-framework.org/</p>
                      <p>
                        Framework to plug into our existing Django Project and
                        use Django's internal ORM to work with database data
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project Setting File (settings.py)</td>
                    <td>
                      <p>Add 'rest_framework' to INSTALLED_APPS</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project URL's File urls.py</td>
                    <td>
                      <p>
                        path('app_api', include('app.api.urls',
                        namespace='app_api')),
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
          <Accordion.Header>Django Rest API Application Setup</Accordion.Header>
          <Accordion.Body>
            <div className="tabl-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Rest API Application Setup</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Django Rest API Application Setup</td>
                    <td>
                      <p>
                        Setup the Basic plumbing for the application to serve
                        content within the Project
                      </p>
                      <p>Must be done inside the Application folder</p>
                    </td>
                    <td>
                      <p>Create a directory called API</p>
                      <p>mkdir app_name/api</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Rest API Application Model File</td>
                    <td>
                      <p>Format to interact with our Database</p>
                    </td>
                    <td>
                      <p>models.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Rest API Application URL's File</td>
                    <td>
                      <p>Maps User call to the code we want to show</p>
                    </td>
                    <td>
                      <p>urls.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Django Rest API Application Views File</td>
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
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Django Rest API Model's File</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Django Rest API Models File models.py</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Purpose</td>
                      <td>
                        <p>
                          Dictates what values we want to store in our database
                          and how we want to pull data from our database
                        </p>
                        <p>
                          Add Desired attributes to interact with Database based
                          on our current Application Model
                        </p>
                        <p>
                          Django Rest API Framework formats the data in the
                          correct way to both present and store data through
                          JSON Objects
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>How do I read this</td>
                      <td>
                        <p>Very Similar to forms.py</p>
                        <p>
                          from rest_framework import serializers
                          <br />
                          from app_name.models import AppModel
                          <br />
                          class SnippetSerializer(serializers.ModelSerializer):
                          <br />
                          &emsp;class Meta:
                          <br />
                          &emsp;&emsp;model = AppModel
                          <br />
                          &emsp;&emsp;fields = ['id',...]
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Django Rest API Views File</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Django Rest API Views File views.py</th>
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
                        DestroyView
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
                        class ArticleCreateView(CreateAPIView):
                        <br />
                        &emsp;queryset = Article.objects.all()
                        <br />
                        &emsp;serializer_class = ArticleSerializer
                        <br />
                        &emsp;permission_classes = (permissions.IsAuthenticated,
                        )
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
                        class ArticleListView(ListAPIView):
                        <br />
                        &emsp;queryset = Article.objects.all()
                        <br />
                        &emsp;serializer_class = ArticleSerializer
                        <br />
                        &emsp;permission_classes = (permissions.IsAuthenticated,
                        )
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
                        class ArticleRetrieveView(RetrieveAPIView):
                        <br />
                        &emsp;queryset = Article.objects.all()
                        <br />
                        &emsp;serializer_class = ArticleSerializer
                        <br />
                        &emsp;permission_classes = (permissions.IsAuthenticated,
                        )
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>UpdateView</td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class ArticleUpdateView(UpdateAPIView):
                        <br />
                        &emsp;queryset = Article.objects.all()
                        <br />
                        &emsp;serializer_class = ArticleSerializer
                        <br />
                        &emsp;permission_classes = (permissions.IsAuthenticated,
                        )
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>DeleteView</td>
                    <td>
                      <p>
                        Class Based View - Shortcut
                        <br />
                        class ArticleDestroyView(DestroyAPIView):
                        <br />
                        &emsp;queryset = Article.objects.all()
                        <br />
                        &emsp;serializer_class = ArticleSerializer
                        <br />
                        &emsp;permission_classes = (permissions.IsAuthenticated,
                        )
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Function Based Views</td>
                    <td>
                      <p>
                        @csrf_exempt
                        <br />
                        def snippet_detail(request, pk):
                        <br />
                        """
                        <br />
                        Retrieve, update or delete a code snippet.
                        <br />
                        """
                        <br />
                        &emsp;try:
                        <br />
                        &emsp;&emsp;snippet = Snippet.objects.get(pk=pk)
                        <br />
                        &emsp;except Snippet.DoesNotExist:
                        <br />
                        &emsp;&emsp;return HttpResponse(status=404)
                        <br />
                        <br />
                        &emsp;if request.method == 'GET':
                        <br />
                        &emsp;&emsp;serializer = SnippetSerializer(snippet)
                        <br />
                        &emsp;&emsp;return JsonResponse(serializer.data)
                        <br />
                        <br />
                        &emsp;elif request.method == 'POST':
                        <br />
                        &emsp;&emsp;data = JSONParser().parse(request)
                        <br />
                        &emsp;&emsp;serializer = SnippetSerializer(snippet,
                        data=data)
                        <br />
                        &emsp;if serializer.is_valid():
                        <br />
                        &emsp;&emsp;serializer.save()
                        <br />
                        &emsp;&emsp;return JsonResponse(serializer.data)
                        <br />
                        &emsp;return JsonResponse(serializer.errors, status=400)
                        <br />
                        <br />
                        &emsp;elif request.method == 'DELETE':
                        <br />
                        &emsp;&emsp;snippet.delete()
                        <br />
                        &emsp;&emsp;return HttpResponse(status=204)
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
          <Accordion.Header>Django Rest API URL's</Accordion.Header>
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
    </div>
  );
};
